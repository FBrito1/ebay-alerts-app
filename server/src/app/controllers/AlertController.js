import Alert from '../schemas/Alert';

class AlertController {
  async index(req, res) {
    res.json({ ok: true });
  }

  async store(req, res) {

    const { searchPhrase, userEmail, notificationSchedule } = req.body;

    const alert = await Alert.create({
      search_phrase: searchPhrase,
      user_email: userEmail,
      notification_schedule: notificationSchedule,
    });

    res.json(alert);
  };
}

export default new AlertController();
