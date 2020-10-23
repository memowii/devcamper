import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SnackbarProvider from "react-simple-snackbar";

import { Layout } from "./Layout";
import { Home } from "../features/home/Home";
import { BootcampsPage } from "../features/bootcamps/BootcampsPage";
import { BootcampPage } from "../features/bootcamp/BootcampPage";
import { ReviewsPage } from "../features/reviews/ReviewsPage";
import { RegisterPage } from "../features/register/RegisterPage";
// import { Login } from "../pages/Login";
// import { ResetPassword } from "../pages/ResetPassword";
// import { ManageBootcamp } from "../pages/ManageBootcamp";
// import { AddReview } from "../pages/AddReview";
// import { AddBootcamp } from "../pages/AddBootcamp";
// import { ManageCourses } from "../pages/ManageCourses";
// import { AddCourse } from "../pages/AddCourse";
// import { ManageAccount } from "../pages/ManageAccount";
// import { UpdatePassword } from "../pages/UpdatePassword";
// import { ManageBootcampNone } from "../pages/ManageBootcampNone";
// import { ManageCoursesNone } from "../pages/ManageCoursesNone";
// import { ManageReviews } from "../pages/ManageReviews";

export const App = () => (
  <div className="App">
    <BrowserRouter>
      <Layout>
        <SnackbarProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bootcamps" component={BootcampsPage} />
            <Route
              exact
              path="/bootcamp/:bootcampId"
              component={BootcampPage}
            />
            <Route
              exact
              path="/bootcamp/:bootcampId/reviews"
              component={ReviewsPage}
            />
            <Route exact path="/register" component={RegisterPage} />
            {/* 
            <Route
              exact
              path="/bootcamp/:id/add-review"
              component={AddReview}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/add-bootcamp" component={AddBootcamp} />
            <Route exact path="/manage-courses" component={ManageCourses} />
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
            /> */}
          </Switch>
        </SnackbarProvider>
      </Layout>
    </BrowserRouter>
  </div>
);
