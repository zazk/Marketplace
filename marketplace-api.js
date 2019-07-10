const express = require('express');
const bodyParser = require('body-parser');
const mailer = require('./utils/mailer');
var ManagementClient = require('auth0').ManagementClient;
//TODO move mgmt client outside

const router = express.Router();
router.use(bodyParser.json());

router.post('/api/requestQuote', (req, res) => {
  const { name, email, companyname, phonenumber, selectvolumen, selectbudget, message } = req.body;
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
    Message: ${message}
  `;

  mailer({ from, to, replyTo, subject, text })
    .then(() => {
      res.send('success');
    })
    .catch(error => {
      res.send('error');
    });
});

router.post('/api/createAccount', (req, res) => {
  const { companyname, name, phonenumber, userid } = req.body;
  var auth0mgmt = new ManagementClient({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_MGMT_CLIENT_ID,
    clientSecret: process.env.AUTH0_MGMT_CLIENT_SECRET,
    scope: 'read:users update:users',
  });
  var params = { id: userid };
  var data = {
    name: name,
  };
  var metadata = {
    phoneNumber: phonenumber,
    companyName: companyname,
  };
  auth0mgmt.updateUser(params, data, function(err, user) {
    if (err) {
      console.log('ERROR: updateUser');
      console.log(err);
      res.send('error');
    }
  });
  auth0mgmt.updateUserMetadata(params, metadata, function(err, user) {
    if (err) {
      console.log('ERROR: updateUserMetadata');
      console.log(err);
      res.send('error');
    }
  });
  res.send('success');
});

module.exports = router;
