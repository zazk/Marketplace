import LandingPage from './pages/landing';
import PDP from './pages/pdp';
import Projects from './pages/list';

const publicRoutes = [
  {
    name: 'Home',
    component: LandingPage,
    path: '/',
    exact: true,
  },
  {
    name: 'PDP',
    component: PDP,
    path: '/pdp',
    exact: true,
  },
  {
    name: 'List Projects',
    component: Projects,
    path: '/list',
    exact: true,
  },
];

export { publicRoutes };
