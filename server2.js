const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const uid = require('uid-safe');

require('dotenv').config();

const configurePassport = require('./src/api/passport');
const authRoutes = require('./src/api/routes/auth');
const marketplaceApi = require('./src/api/routes/marketplace');

const app = express();
configurePassport();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

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
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port', port);
});
