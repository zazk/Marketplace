var express = require('express');
var secured = require('../utils/secured');
var router = express.Router();

/* DB Controllers */
const roleController = require('../db/controllers').role;
const accountController = require('../db/controllers').account;
console.log('markeplace-js');
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
