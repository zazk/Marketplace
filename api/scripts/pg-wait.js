// Wait till we are able to connect to pg
const { Client } = require('pg');
const environment = process.env.NODE_ENV || 'development';

const DEFAULT_MAX_ATTEMPTS = 10;
const DEFAULT_DELAY = 1000; // in ms

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

const clientConf = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci',
};

function waitForPostgres(maxAttempts = DEFAULT_MAX_ATTEMPTS, delay = DEFAULT_DELAY, retries = 1) {
  const client = new Client(clientConf);
  return client.connect().then(
    () => {
      console.log('Postgres is up');
      return client.end();
    },
    () => {
      if (retries > maxAttempts) {
        return Promise.reject(error);
      }
      console.log('Postgres is unavailable - sleeping');
      return timeout(delay).then(() => waitForPostgres(maxAttempts, delay, retries + 1));
    }
  );
}

waitForPostgres();
