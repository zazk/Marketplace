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
  'mccloud-river': {
    pdp: require('./mccloud-river-pdp.json'),
    geojson: require('./mccloud-river-geo.json'),
    biomass: require('./tricity-biomass.json'),
  },
  'alligator-river': {
    pdp: require('./alligator-river-pdp.json'),
    geojson: require('./alligator-river-geo.json'),
    biomass: require('./tricity-biomass.json'),
  },
  'doe-mountain': {
    pdp: require('./doe-mountain-pdp.json'),
    geojson: require('./doe-mountain-geo.json'),
    biomass: require('./tricity-biomass.json'),
  },
  'hawk-mountain': {
    pdp: require('./hawk-mountain-pdp.json'),
    geojson: require('./hawk-mountain-geo.json'),
    biomass: require('./tricity-biomass.json'),
  },
  'pocosin-lakes': {
    pdp: require('./pocosin-lakes-pdp.json'),
    geojson: require('./pocosin-lakes-geo.json'),
    biomass: require('./tricity-biomass.json'),
  },
  'brazil-preto': {
    pdp: require('./brazil-preto-pdp.json'),
    geojson: require('./brazil-preto-geo.json'),
    biomass: require('./tricity-biomass.json'),
  },
  'brazil-manoa': {
    pdp: require('./brazil-manoa-pdp.json'),
    geojson: require('./brazil-manoa-geo.json'),
    biomass: require('./tricity-biomass.json'),
  },
};

const dataProjects = [
  projects['middleburry'],
  projects['hudson'],
  projects['tricity'],
  projects['alligator-river'],
  projects['mccloud-river'],
  projects['doe-mountain'],
  projects['hawk-mountain'],
  projects['pocosin-lakes'],
  projects['brazil-preto'],
  projects['brazil-manoa'],
];

export default dataProjects;
