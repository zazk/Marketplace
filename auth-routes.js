const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get(
  '/login',
  passport.authenticate('auth0', {
    scope: 'openid email profile',
  }),
  (req, res) => res.redirect('/')
);

router.get('/callback', (req, res, next) => {
  passport.authenticate('auth0', (err, user) => {
    if (err) return next(err);
    console.log(user);
    if (!user) return res.redirect('/login');
    req.logIn(user, err => {
      if (err) return next(err);
      // TODO fix this hack with Auth0 Lock
      if (user['_json']['http://pachama.com/display']) {
        var display = user['_json']['http://pachama.com/display'];
        if (display === 'list') {
          res.redirect('/list');
        } else {
          var projectId = parseInt(display, 10);
          res.redirect(`/pdp?id=${projectId}`);
        }
      } else {
        res.redirect('/create-account');
      }
    });
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();

  const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, BASE_URL } = process.env;
  res.redirect(`https://${AUTH0_DOMAIN}/logout?client_id=${AUTH0_CLIENT_ID}&returnTo=${BASE_URL}`);
});

module.exports = router;
