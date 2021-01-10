import { Button, Container, Grid, Typography } from "@material-ui/core";
import { useKeycloak } from "@react-keycloak/web";
import { useLayoutEffect, useState } from "react";

const HomePage = () => {
  const { keycloak } = useKeycloak();
  const [user, setUser] = useState();
  useLayoutEffect(() => {
    if (!keycloak.authenticated) {
      window.location.href = "/login";
    } else {
      keycloak.loadUserProfile().then((user) => setUser(user));
    }
  }, [keycloak]);

  return (
    user ?
    <Container
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "80vh",
      }}
    >
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#E5E5E5",
          borderRadius: 24,
        }}
        spacing={3}
      >
        <Grid item xs={3}>
          <Typography style={{ fontSize: 25 }}>
            {`Usuario ${!keycloak.authenticated ? "NOT " : ""}autenticado`}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          {!keycloak.authenticated && (
            <button type="button" onClick={() => keycloak.login()}>
              Login
            </button>
          )}
        </Grid>

        <Grid
          container
          item
          xs={6}
          spacing={4}
          style={{
            backgroundColor: "white",
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 8,
            borderRadius: 8
          }}
        >
          <Grid>
            <Typography variant={"subtitle1"}>Nome do Usuario</Typography>{" "}
          </Grid>
          <div style={{ width: 24 }}></div>
          <Grid>
            <Typography> {user ? user.firstName : ""}</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={6}
          spacing={4}
          style={{
            backgroundColor: "white",
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 8,
            borderRadius: 8
          }}
        >
          <Grid>
            <Typography variant={"subtitle1"}>Realm</Typography>{" "}
          </Grid>
          <div style={{ width: 24 }}></div>
          <Grid>
            <Typography> {keycloak.realm}</Typography>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          {!!keycloak.authenticated && (
            <Button
              variant={"outlined"}
              onClick={() => {
                keycloak.logout();
                localStorage.removeItem("config");
              }}
            >
              Logout
            </Button>
          )}
        </Grid>
      </Grid>
    </Container> : <></>
  );
};

export default HomePage;
