import React from "react";

import HomePage from "../page/HomePage";
import { PrivateRoute } from "../utilities/PrivateRoute";
import ProtectedPage from "../page/ProtectedPage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginSelection from "../page/LoginSelection";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginSelection} />
          <PrivateRoute path="/protected" component={ProtectedPage} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </>
  );
};
