import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import routes from './list';

export default () => {
  return (
    <Router>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bubblegum">Bubblegum</Link>
        </li>
        <li>
          <Link to="/shoelaces">Shoelaces</Link>
        </li>
      </ul>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} children={<route.sidebar />} />
        ))}
      </Switch>
    </Router>
  );
};
