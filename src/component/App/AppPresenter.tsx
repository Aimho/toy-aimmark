import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../routes/Home";
import NotFound from "../../routes/NotFound";

const AppPresenter: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppPresenter;
