const routes = require('next-routes');

module.exports = routes()
  .add('map', '/map', 'map')
  .add('details', '/details', 'Details')
  .add('projectlist', '/projectlist', 'ProjectList');
