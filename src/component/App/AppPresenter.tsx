import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../routes/Home";
import Detail from "../../routes/Detail";
import NotFound from "../../routes/NotFound";
import AppBar from "../AppBar";

const AppPresenter: React.FC = () => (
  <BrowserRouter>
    <AppBar />
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/:id" exact={true} component={Detail} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppPresenter;
