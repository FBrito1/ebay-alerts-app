import 'dotenv/config';
import mongoose from 'mongoose';
import Queue from 'bull';
import SendMailService from './app/services/SendMailService';
import Alert from './app/schemas/Alert';

mongoose.connect('mongodb://localhost:27017/ebay_alerts', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

// change REDIS HOST
const sendMail = new Queue(
  'sendMail',
  `redis://localhost:${process.env.REDIS_PORT}`
);

sendMail.process(async (job, done) => {
  const jobData = job.data;

  console.log('data', jobData);

  const alert = await Alert.findById(jobData.id);

  console.log('alert', alert);

  const payload = {
    email: jobData.email,
    id: jobData.id,
  };

  if (jobData.email) {
    await SendMailService.send(payload);
  }

  if (alert) {
    setTimeout(() => {
      sendMail.add(payload);
    }, alert.notification_schedule * 60000);
  }

  done();
});
