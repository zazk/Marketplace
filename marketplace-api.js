const express = require('express');
const bodyParser = require('body-parser');
const mailer = require('./utils/mailer');

const router = express.Router();

router.use(bodyParser.json());

router.post('/api/requestQuote', (req, res) => {
  const { name, email, companyname, phonenumber, selectvolumen, selectbudget } = req.body;
  const from = `${process.env.PACHAMA_MARKETPLACE_FROM} <${process.env.PACHAMA_MARKETPLACE_MAIL}>`;
  const to = process.env.PACHAMA_SALES_MAIL;
  const replyTo = `${name} <${email}>`;
  const subject = 'Marketplace request quote';
  const text = `
  Request quote received
    From: ${name}
    Email: ${email}
    Company: ${companyname}
    Phone: ${phonenumber}
    Volume: ${selectvolumen}
    Budget: ${selectbudget}
  `;

  mailer({ from, to, replyTo, subject, text })
    .then(() => {
      res.send('success');
    })
    .catch(error => {
      res.send('error');
    });
});

module.exports = router;
