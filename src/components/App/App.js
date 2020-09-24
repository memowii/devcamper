import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "../Layout";
import { Home } from '../../pages/Home'
import { Login } from '../../pages/Login'
import { ResetPassword } from '../../pages/ResetPassword'
import { Register } from '../../pages/Register'

export const App = () => (
  <div className="App">
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </div>
);