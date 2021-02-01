import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../routes/Home";
import Detail from "../../routes/Detail";
import NotFound from "../../routes/NotFound";

const AppPresenter: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/:id" exact={true} component={Detail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default AppPresenter;
