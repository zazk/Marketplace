import LandingPage from './pages/landing';

const publicRoutes = [
  {
    name: 'Home',
    component: LandingPage,
    path: '/',
    exact: true,
  },
];

export { publicRoutes, privateRoutes };
