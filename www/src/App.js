import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { publicRoutes } from './routes';
import Layout from './components/Layout';
import { AuthContextProvider } from './components/common/user/AuthContext.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <AuthContextProvider>
            {publicRoutes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                render={() => (
                  <Layout
                    component={route.component}
                    route={route}
                    customClass={route.customClass ? route.customClass : ''}
                  />
                )}
              />
            ))}
          </AuthContextProvider>
        </Switch>
      </Router>
    );
  }
}

export default withRouter(App);
