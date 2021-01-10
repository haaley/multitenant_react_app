import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import { AppRouter } from "./routes";
import configs from "./keycloak.options.json";
import LoadingPage from "./page/LoadingPage";

const App = () => {
  const getConfig = localStorage.getItem("config");

  const eventLogger = (event, error) => {
    if (event === "onInitError") {
      if (!getConfig) {
        localStorage.setItem("config", "slave");
        return (window.location.href = "/login");
      }
    }
  };

  const tokenLogger = (tokens) => {
    console.log("onKeycloakTokens", tokens);
  };

  return (
    <ReactKeycloakProvider
      initOptions={{
        onLoad: "check-sso",
        promiseType: "native",
      }}
      authClient={keycloak(configs[getConfig])}
      LoadingComponent={<LoadingPage />}
      onEvent={eventLogger}
      onTokens={tokenLogger}
    >
      <AppRouter />
    </ReactKeycloakProvider>
  );
};
export default App;
