const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');
const path = require('path');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `Kim Hoang Duong <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        host: process.env.MAILERSEND_HOST,
        port: process.env.MAILERSEND_PORT,
        auth: {
          user: process.env.MAILERSEND_USERNAME,
          pass: process.env.MAILERSEND_PASSWORD,
        },
      });
    }

    // Development SMTP server (e.g., Mailtrap)

    return nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '10843dcf90f538',
        pass: '8f6b3400c4e6b3',
      },
    });
  }
  // Send the actual email
  async send(template, subject) {
    // 1) Render HTML based on a pug template
    const templatePath = path.resolve(
      __dirname,
      '..',
      'views',
      'emails',
      `${template}.pug`,
    );
    const html = pug.renderFile(templatePath, {
      firstName: this.firstName,
      url: this.url,
      subject,
    });

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.convert(html, { wordwrap: 130 }),
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Natours Family!');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for only 10 minutes)',
    );
  }
};
