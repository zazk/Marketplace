import getConfig from 'next/config';
import mixpanel from 'mixpanel-browser';

const { publicRuntimeConfig } = getConfig();
const { MIXPANEL_TOKEN } = publicRuntimeConfig;
mixpanel.init(MIXPANEL_TOKEN);

let prod = process.env.NODE_ENV === 'production';

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
