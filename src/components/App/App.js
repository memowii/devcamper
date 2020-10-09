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
import { ManageCourses } from "../../pages/ManageCourses";
import { AddCourse } from "../../pages/AddCourse";
import { ManageAccount } from "../../pages/ManageAccount";
import { UpdatePassword } from "../../pages/UpdatePassword";
import { ManageBootcampNone } from "../../pages/ManageBootcampNone";
import { ManageCoursesNone } from "../../pages/ManageCoursesNone";
import { ManageReviews } from "../../pages/ManageReviews";

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
          <Route exact path="/bootcamp/:id" component={Bootcamp} />
          <Route exact path="/add-bootcamp" component={AddBootcamp} />
          <Route exact path="/manage-courses" component={ManageCourses} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/add-review" component={AddReview} />
          <Route exact path="/manage-bootcamp" component={ManageBootcamp} />
          <Route exact path="/add-course" component={AddCourse} />
          <Route exact path="/manage-account" component={ManageAccount} />
          <Route exact path="/update-password" component={UpdatePassword} />
          <Route exact path="/manage-reviews" component={ManageReviews} />
          <Route
            exact
            path="/manage-bootcamp-none"
            component={ManageBootcampNone}
          />
          <Route
            exact
            path="/manage-courses-none"
            component={ManageCoursesNone}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  </div>
);
