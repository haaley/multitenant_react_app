import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import { AppRouter } from "./routes";
const App = () => {

  const configs = {
    slave: {
      url: "http://localhost:8081/auth/",
      realm: "slave",
      clientId: "react-app-slave",
    },
    master: {
      url: "http://localhost:8081/auth/",
      realm: "master",
      clientId: "react-app",
    },
  };

  const getConfig = localStorage.getItem("config");


  const eventLogger = (event, error) => {
    if (event === "onInitError") {
      if(!getConfig){
      localStorage.setItem('config', 'slave')
      return (window.location.href = "/login");
    }}
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
      LoadingComponent={() => <div>XDX DXDXDXD</div>}
      onEvent={eventLogger}
      onTokens={tokenLogger}
    >
      <AppRouter />
    </ReactKeycloakProvider>
  );
};
export default App;
