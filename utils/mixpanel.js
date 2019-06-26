import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.MIXPANEL_TOKEN);

let prod = process.env.NODE_ENV === 'production';
prod = true;
let actions = {
  identify: id => {
    if (prod) mixpanel.identify(id);
  },
  alias: id => {
    if (prod) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (prod) mixpanel.track(name, props);
  },
  people: {
    set: props => {
      if (prod) mixpanel.people.set(props);
    },
  },
};

export let Mixpanel = actions;
