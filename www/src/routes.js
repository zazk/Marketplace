import LandingPage from './pages/landing';
import PDP from './pages/pdp';
import Projects from './pages/list';
import Admin from './pages/admin';
import Login from './pages/login';

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
  {
    name: 'Admin',
    component: Admin,
    path: '/admin',
    exact: true,
  },
  {
    name: 'Login',
    component: Login,
    path: '/login',
    exact: true,
  },
];

export { publicRoutes };
