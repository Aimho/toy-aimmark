import React from 'react';
import { Route, Switch, RouteProps } from 'react-router-dom';

import Home from './Home';
import ExampleAxios from './ExampleAxios';
import ExampleRedux from './ExampleRedux';
import ExampleHooks from './ExampleHooks';

const Container = () => {
  const routes: RouteProps[] = [
    { path: '/', component: Home, exact: true },
    { path: '/hooks', component: ExampleHooks, exact: true },
    { path: '/redux', component: ExampleRedux, exact: true },
    { path: '/axios', component: ExampleAxios, exact: true }
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
