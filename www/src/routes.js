import LandingPage from './pages/landing';
import PDP from './pages/pdp';
import Projects from './pages/list';
import Admin from './pages/admin';
import CallBack from './pages/callback';
import CreateAccount from './pages/createacount';

import Dashboard from './pages/dashboard';

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
    name: 'Callback',
    component: CallBack,
    path: '/callback',
    exact: true,
  },
  {
    name: 'Create Account',
    component: CreateAccount,
    path: '/create-account',
    exact: true,
  },
  {
    name: 'Dashboard',
    component: Dashboard,
    path: '/dashboard',
    exact: true,
    customClass: 'dashboard-page',
  },
];

export { publicRoutes };
