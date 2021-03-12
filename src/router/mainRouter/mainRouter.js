import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../../components/auth/login";
import SignUP from "../../components/auth/signUp";
import Dashboard from "../../components/dashboard";
import PrivetRouter from "../privetRouter/privetRouter";
import NavBar from "../../common/navBar";

const MainRouter = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/sign-up" component={SignUP}></Route>
      <PrivetRouter
        exact
        path="/dashboard"
        component={Dashboard}
      ></PrivetRouter>
    </Switch>
  </>
);

export default MainRouter;
