const next = require('next');
const express = require('express');
const routes = require('./routes');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  express()
    .use(handler)
    .listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`);
    });
});
