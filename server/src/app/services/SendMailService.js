import Mail from '../../lib/Mail';

class SendMailService {
  async send({ id, email }) {
    await Mail.sendMail({
      to: `Usuario <${email}>`,
      subject: 'ALERTA',
      template: 'alert',
      context: {
        email,
        alert: id,
      },
    });
  }
}

export default new SendMailService();
