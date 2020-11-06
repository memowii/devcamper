import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { PrivateRoute } from "../common/components/PrivateRoute";
import { Layout } from "./Layout";
import { Home } from "../features/home/Home";
import { BootcampsPage } from "../features/bootcamps/BootcampsPage";
import { BootcampPage } from "../features/bootcamp/BootcampPage";
import { ReviewsPage } from "../features/reviews/ReviewsPage";
import { AddReviewPage } from "../features/reviews/AddReviewPage";
import { ManageReviewsPage } from "../features/reviews/ManageReviewsPage";
import { ManageUserAccountPage } from "../features/user/ManageUserAccountPage";
import { UpdateUserPasswordPage } from "../features/user/UpdateUserPasswordPage";
import { EditReviewPage } from "../features/reviews/EditReviewPage";
import { RegisterUserPage } from "../features/user/RegisterUserPage";
import { LoginUserPage } from "../features/user/LoginUserPage";
import { UnauthorizedUser } from "../features/user/UnauthorizedUser";
import { ManageBootcampPage } from "../features/bootcamp/ManageBootcampPage";
import { AddBootcampPage } from "../features/bootcamp/AddBootcampPage";
import { EditBootcampPage } from "../features/bootcamp/EditBootcampPage";
import { ManageCoursesPage } from "../features/courses/ManageCoursesPage";
import { AddCoursePage } from "../features/courses/AddCoursePage";
// import { ResetPassword } from "../pages/ResetPassword";

export const App = () => (
  <div className="App">
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bootcamps" component={BootcampsPage} />
          <Route exact path="/bootcamp/:bootcampId" component={BootcampPage} />
          <Route
            exact
            path="/bootcamp/:bootcampId/reviews"
            component={ReviewsPage}
          />
          <PrivateRoute
            exact
            path="/bootcamp/:bootcampId/add-review"
            component={AddReviewPage}
            allowedUserRole="user"
          />
          <Route
            exact
            path="/manage-reviews"
            component={ManageReviewsPage}
            allowedUserRole="user"
          />
          <Route
            exact
            path="/manage-reviews/:reviewId/edit-review"
            component={EditReviewPage}
            allowedUserRole="user"
          />
          <Route exact path="/register" component={RegisterUserPage} />
          <Route exact path="/login" component={LoginUserPage} />
          <Route exact path="/unauthorized" component={UnauthorizedUser} />
          <PrivateRoute
            exact
            path="/manage-account"
            component={ManageUserAccountPage}
          />
          <PrivateRoute
            exact
            path="/update-password"
            component={UpdateUserPasswordPage}
          />
          <PrivateRoute
            exact
            path="/manage-bootcamp"
            role="publisher"
            component={ManageBootcampPage}
          />
          <PrivateRoute
            exact
            path="/add-bootcamp"
            role="publisher"
            component={AddBootcampPage}
          />
          <PrivateRoute
            exact
            path="/manage-bootcamp/:bootcampId/edit-bootcamp"
            role="publisher"
            component={EditBootcampPage}
          />
          <PrivateRoute
            exact
            path="/manage-courses"
            role="publisher"
            component={ManageCoursesPage}
          />
          <PrivateRoute
            exact
            path="/add-course"
            role="publisher"
            component={AddCoursePage}
          />
          {/* <Route exact path="/reset-password" component={ResetPassword} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
    <ToastContainer />
  </div>
);
