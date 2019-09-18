var express = require('express');
var secured = require('../utils/secured');
const bodyParser = require('body-parser');
const mailer = require('../utils/mailer');
var router = express.Router();
router.use(bodyParser.json());
/* DB Controllers */
const roleController = require('../db/controllers').role;
const accountController = require('../db/controllers').account;

/* Routes */
router.get('/role', roleController.list);
router.get('/role/:id', roleController.getById);
router.post('/role', roleController.add);
router.put('/role/:id', roleController.update);
router.delete('/role/:id', roleController.delete);

router.get('/account', accountController.list);
router.get('/account/:id', accountController.getById);
router.get('/account/auth0/:auth0', accountController.getByAuth0);
router.post('/account', accountController.add);
router.put('/account/:id', accountController.update);
router.delete('/account/:id', accountController.delete);

router.post('/requestQuote', (req, res) => {
  console.log('test envio form XXX');
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
      res.send({ message: 'success' });
    })
    .catch(error => {
      res.send('error');
    });
});

/* GET user profile. */
router.get('/user', secured(), function(req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
  console.log('Get User');
  console.log(JSON.stringify(userProfile, null, 2));
  res.json(userProfile);
});

router.get('/project', function(req, res, next) {
  //const { _raw, _json, ...userProfile } = req.user;
  console.log('Get Project');
  const projectDetail = {
    name: 'API Protect our forests in the fight against climate change',
    credits_avail: '100,000',
    projects_quantity: '14',
    total_land: '75,020',
    total_biomass: '750,654.21',
    main_picture: '/static/assets/images/banner-landingprojects.jpg',
    text_intro: 'Take part in our challenge',
  };
  console.log(JSON.stringify(projectDetail, null, 2));
  res.json(projectDetail);
});

module.exports = router;
