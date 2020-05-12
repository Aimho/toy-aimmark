import React from 'react';
import { Route, Switch, RouteProps } from 'react-router-dom';

import Home from './Home';
import About from './About';

const Container = () => {
  const routes: RouteProps[] = [
    { path: '/', component: Home, exact: true },
    { path: '/about', component: About, exact: true }
  ];

  return (
    <Switch>
      {routes.map((props, index) => (
        <Route {...props} key={index} />
      ))}
    </Switch>
  );
};

export default Container;
