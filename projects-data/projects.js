const projects = {
  middleburry: {
    pdp: require('./middleburry-pdp.json'),
    geojson: require('./middleburry-geo.json'),
    biomass: require('./middleburry-biomass.json'),
  },
  'great-mountain-forest': {
    pdp: require('./great-mountain-forest-pdp.json'),
    geojson: require('./great-mountain-forest-geo.json'),
    biomass: require('./great-mountain-forest-biomass.json'),
  },
  'green-trees': {
    pdp: require('./green-trees-pdp.json'),
    geojson: require('./green-trees-geo.json'),
    biomass: require('./green-trees-biomass.json'),
  },
  hudson: {
    pdp: require('./hudson-pdp.json'),
    geojson: require('./hudson-geo.json'),
    biomass: require('./hudson-biomass.json'),
  },
  tricity: {
    pdp: require('./tricity-pdp.json'),
    geojson: require('./tricity-geo.json'),
    biomass: require('./tricity-biomass.json'),
  },
};

const dataProjects = [projects['middleburry'], projects['hudson'], projects['tricity']];

export default dataProjects;
