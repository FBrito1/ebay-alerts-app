import Mail from '../../lib/Mail';

class SendMailService {
  async send(data) {
    const {
      id,
      email,
      p1Title,
      p1Price,
      p1productLink,
      p2Title,
      p2Price,
      p2productLink,
      p3Title,
      p3Price,
      p3productLink,
    } = data;

    await Mail.sendMail({
      to: `Usuario <${email}>`,
      subject: 'ALERTA',
      template: 'alert',
      context: {
        email,
        alert: id,
        p1Title,
        p1Price,
        p1productLink,
        p2Title,
        p2Price,
        p2productLink,
        p3Title,
        p3Price,
        p3productLink,
      },
    });
  }
}

export default new SendMailService();
