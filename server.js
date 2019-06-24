require('dotenv').config();
const next = require('next');
const express = require('express');
const http = require('http');
const session = require('express-session');

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const uid = require('uid-safe');
const authRoutes = require('./auth-routes');
//const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';

const app = next({
  dev,
});

const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  const sessionConfig = {
    secret: uid.sync(18),
    cookie: {
      maxAge: 86400 * 1000, // 24hs
    },
    resave: false,
    saveUninitialized: true,
  };
  server.use(session(sessionConfig));

  const auth0Strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL,
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      return done(null, profile);
    }
  );

  passport.use(auth0Strategy);
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  server.use(passport.initialize());
  server.use(passport.session());
  server.use(authRoutes);

  //server.use(routes);

  const restrictAccess = (req, res, next) => {
    if (!req.isAuthenticated()) return res.redirect('/login');
    next();
  };

  server.use('/details', restrictAccess);

  server.get('*', handle);

  http.createServer(server).listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
  });
});
