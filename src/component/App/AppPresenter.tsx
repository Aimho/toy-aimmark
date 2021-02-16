import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../../routes/Home/HomeContainer";
import Detail from "../../routes/Detail";
import NotFound from "../../routes/NotFound";

const AppPresenter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/:userId" exact={true} component={Detail} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppPresenter;
