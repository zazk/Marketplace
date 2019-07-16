import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import routes from './routes';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              render={() => <Layout component={route.component} route={route} />}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default withRouter(App);
