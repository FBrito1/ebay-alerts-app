import 'dotenv/config';
import mongoose from 'mongoose';
import Queue from 'bull';
import SendMailService from './app/services/SendMailService';
import EbayApiService from './app/services/EbayApiService';
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
  let products = [];

  const alert = await Alert.findById(jobData.id);

  console.log('alert', alert);

  if (alert) {
    products = await EbayApiService.getProductsWithLowerPrice(
      alert.search_phrase
    );
  }

  const payload = {
    email: jobData.email,
    id: jobData.id,
  };

  if (products.length !== 0) {
    const [p1, p2, p3] = products;

    const emailData = {
      email: jobData.email,
      p1Title: p1.title,
      p1Price: p1.price,
      p1productLink: p1.productLink,
      p2Title: p2.title,
      p2Price: p2.price,
      p2productLink: p2.productLink,
      p3Title: p3.title,
      p3Price: p3.price,
      p3productLink: p3.productLink,
    };

    console.log('emailData', emailData);

    if (jobData.email) {
      await SendMailService.send(emailData);
    }
  }

  if (alert) {
    setTimeout(() => {
      sendMail.add(payload);
    }, alert.notification_schedule * 60000);
  }

  done();
});
