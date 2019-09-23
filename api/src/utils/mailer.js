const nodemailer = require('nodemailer');

const send = ({ from, to, replyTo, subject, text }) => {
  const client = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
      user: process.env.SENDGRID_SMTP_USERNAME,
      pass: process.env.SENDGRID_SMTP_PASSWORD,
    },
  });
  const message = {
    from: from,
    to: to,
    replyTo: replyTo,
    subject: subject,
    text: text,
  };

  return new Promise((resolve, reject) => {
    client.sendMail(message, function(err, info) {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};

module.exports = send;
