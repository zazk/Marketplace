const routes = require('next-routes');

module.exports = routes()
  .add('home', '/', 'index')
  .add('map', '/map', 'map')
  .add('details', '/details', 'Details');
