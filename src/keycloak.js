import Keycloak from 'keycloak-js'

const keycloakInstance = (config) => {
  console.log(config);
  return new Keycloak(config);
}


export default keycloakInstance