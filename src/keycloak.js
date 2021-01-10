import Keycloak from 'keycloak-js'
import options from './keycloak.options.json'

const keycloakInstance = (config) => {
  console.log(config);
  return new Keycloak(config);
}


export const initKeycloakWithConfig = (optionName) => {
  localStorage.setItem("config", optionName);
  
  const keycloak = new Keycloak(options[optionName]);

 return keycloak
    .init(options[optionName])
    .then((logged) => {
      if (!logged) {
        console.log("nao logado indo pro login como " + optionName);
        keycloak.login({ redirectUri: process.env.PUBLIC_URL });
      } else {
        console.log("teste");
        window.location.href = "/";
      }
    });
}

export default keycloakInstance