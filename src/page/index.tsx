import React from 'react';
import { Route, Switch, RouteProps } from 'react-router-dom';

import Home from './Home';
import Movie from './Movie';

const Container = () => {
  const routes: RouteProps[] = [
    { path: '/', component: Home, exact: true },
    { path: '/movie', component: Movie, exact: true }
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
