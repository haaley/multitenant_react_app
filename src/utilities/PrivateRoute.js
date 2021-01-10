import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ component: Component, roles, ...rest }) {
  const { keycloak } = useKeycloak();

  const isAutherized = (roles) => {
    if (keycloak.authenticated) {
      return true;
    }

    alert("Nao autorizado");
    return false;
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        return isAutherized() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        );
      }}
    />
  );
}
