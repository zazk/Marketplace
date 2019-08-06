const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const configurePassport = () => {
  const auth0Strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: `${process.env.BASE_URL}/auth/callback`,
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      return done(null, profile);
    }
  );

  passport.use(auth0Strategy);
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));
};

module.exports = configurePassport;
