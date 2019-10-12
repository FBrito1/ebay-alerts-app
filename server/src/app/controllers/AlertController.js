import Queue from 'bull';
import Alert from '../schemas/Alert';
import AlertValidator from '../validators/AlertValidator';

const sendMail = new Queue(
  'sendMail',
  `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
);

class AlertController {
  async index(req, res) {
    const { userEmail } = req;

    const alerts = await Alert.find({ user_email: userEmail });

    if (!alerts) {
      return res.status(404).json({
        message: 'Cannot found alerts for this email',
        error: true,
      });
    }

    return res.json(alerts);
  }

  async store(req, res) {
    const { searchPhrase, userEmail, notificationSchedule } = req.body;

    const schema = await AlertValidator.validateStore(req.body);

    if (schema.isError) {
      return res.status(400).json({
        message: 'Invalid request arguments',
        error: schema.error,
      });
    }

    const alertAlreadyExists = await Alert.findOne({
      user_email: userEmail,
      search_phrase: searchPhrase,
    });

    if (alertAlreadyExists) {
      return res.status(400).json({
        message: 'One alert with this search phrase already exists',
        error: schema.error,
      });
    }

    const alert = await Alert.create({
      search_phrase: searchPhrase,
      user_email: userEmail,
      notification_schedule: notificationSchedule,
    });

    const queueData = {
      notificationSchedule,
      alert,
    };

    await sendMail.add(queueData);

    return res.status(201).json(alert);
  }

  async update(req, res) {
    const { alertId } = req.params;
    const { userEmail } = req;
    const { searchPhrase, notificationSchedule } = req.body;

    const schema = await AlertValidator.validateUpdate(req.body);

    if (schema.isError) {
      return res.status(400).json({
        message: 'Invalid request arguments',
        error: schema.error,
      });
    }

    const alert = await Alert.findById(alertId);

    if (!alert) {
      return res.status(404).json({
        message: 'Alert not found',
        error: true,
      });
    }

    if (alert.user_email !== userEmail) {
      return res.status(400).json({
        message: 'Invalid request arguments',
        error: 'You cannot update this alert',
      });
    }

    const updatedAlert = await Alert.findByIdAndUpdate(
      alertId,
      {
        search_phrase: searchPhrase,
        notification_schedule: notificationSchedule,
      },
      { new: true }
    );

    return res.json(updatedAlert);
  }

  async delete(req, res) {
    const { alertId } = req.params;
    const { userEmail } = req;

    const alert = await Alert.findById(alertId);

    if (!alert) {
      return res.status(404).json({
        message: 'Alert not found',
        error: true,
      });
    }

    if (alert.user_email !== userEmail) {
      return res.status(400).json({
        message: 'Invalid request arguments',
        error: 'You cannot delete this alert',
      });
    }

    const deletedAlert = await Alert.findByIdAndRemove(alertId);

    return res.json(deletedAlert);
  }
}

export default new AlertController();
