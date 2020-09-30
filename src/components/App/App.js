import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "../Layout";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { ResetPassword } from "../../pages/ResetPassword";
import { Register } from "../../pages/Register";
import { Bootcamps } from "../../pages/Bootcamps";
import { ManageBootcamp } from "../../pages/ManageBootcamp";
import { Bootcamp } from "../../pages/Bootcamp";
import { Reviews } from "../../pages/Reviews";
import { AddReview } from "../../pages/AddReview";
import { AddBootcamp } from "../../pages/AddBootcamp";

export const App = () => (
  <div className="App">
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/bootcamps" component={Bootcamps} />
          <Route exact path="/bootcamp" component={Bootcamp} />
          <Route exact path="/add-bootcamp" component={AddBootcamp} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/add-review" component={AddReview} />
          <Route exact path="/manage-bootcamp" component={ManageBootcamp} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </div>
);
