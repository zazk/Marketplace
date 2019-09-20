const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const uid = require('uid-safe');
const cors = require('cors');
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

require('dotenv').config();

const configurePassport = require('./passport');
const authRoutes = require('./routes/auth');
const marketplaceApi = require('./routes/marketplace');

const WWW_BUILD_PATH = path.join(__dirname, '../../www/build');
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

const app = express();
const dev = process.env.NODE_ENV !== 'production';
if (dev) {
  app.use(cors()).options('*', cors());
}

configurePassport();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(WWW_BUILD_PATH));

const sessionConfig = {
  secret: uid.sync(18),
  cookie: {
    maxAge: 86400 * 1000, // 24hs
  },
  resave: false,
  saveUninitialized: true,
};
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);
app.use('/api', marketplaceApi);

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://marketplace-pachama.auth0.com/.well-known/jwks.json`,
  }),
  audience: 'api.marketplace.pachama.com',
  issuer: `https://marketplace-pachama.auth0.com`,
  algorithms: ['RS256'],
});

app.get('/api/public', function(req, res) {
  res.json({
    message: "Hello from a public endpoint! You don't need to be authenticated to see this.",
  });
});
app.get('/test/', checkJwt, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.',
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(WWW_BUILD_PATH, 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening on ${host}:${port}`);
});
