const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const uid = require('uid-safe');
const cors = require('cors');
require('dotenv').config();

const configurePassport = require('./passport');
const authRoutes = require('./routes/auth');
const marketplaceApi = require('./routes/marketplace');

const WWW_BUILD_PATH = path.join(__dirname, '../../www/build');
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

const app = express();

app.use(cors()).options('*', cors());

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

// app.get('/api/getRequest', (req, res) => {
// //None
//  });
// });
// app.post('/api/postRequest', (req, res) => {
//   // None
//  });
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(WWW_BUILD_PATH, 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening on ${host}:${port}`);
});
