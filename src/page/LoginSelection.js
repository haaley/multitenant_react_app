import {useEffect} from 'react';
import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Keycloak from "keycloak-js";
import {
  ArrowForwardRounded,
  BusinessRounded,
  PersonRounded,
} from "@material-ui/icons";

const useStyles = makeStyles({
  optionStyle: {
    display: "flex",
    flexDirection: "column",
    padding: 34,
    backgroundColor: "white",
    justifyContent: "space-between",
    borderRadius: 25,
    height: 178,
    width: 476,
    "&:hover": {
      background: "#efefef",
    },
  },
});


export default function LoginSelection() {


    useEffect(() => {
        console.log('LoginSelection')
    }, [])
  const classes = useStyles();

  return (
    <Container
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        flexDirection: "column",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" style={{ textAlign: "left", padding: 24 }}>
          Escolha como deseja realizar login
        </Typography>
      </Box>
      <Container
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#E5E5E5",
          borderRadius: 25,
        }}
      >
        <Box
          className={classes.optionStyle}
          onClick={() => {
            localStorage.setItem("config", "slave");
            const keycloak = new Keycloak({
              url: "http://localhost:8081/auth/",
              realm: "slave",
              clientId: "react-app-slave",
            });

            keycloak
              .init({
                url: "http://localhost:8081/auth/",
                realm: "slave",
                clientId: "react-app-slave",
              })
              .then((logged) => {
                if (!logged) {
                  console.log("nao logado indo pro login como slave");
                  keycloak.login({ redirectUri: "http://172.18.92.4:3000/" });
                } else {
                  console.log("teste");
                  window.location.href = "/";
                }
              });
          }}
        >
          <Box style={{ flex: 1, display: "flex" }}>
            <PersonRounded
              style={{ transform: "scale(2)", color: "#5D6A75" }}
            />
          </Box>
          <Box
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              style={{
                fontFamily: "Public Sans",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 24,
                lineHeight: "100%",
                color: "#5D6A75",
              }}
            >
              Acessar como colaborador
            </Typography>
            <ArrowForwardRounded
              style={{ transform: "scale(2)", color: "#5D6A75" }}
            />
          </Box>
        </Box>
        <Box
          className={classes.optionStyle}
          onClick={() => {
            localStorage.setItem("config", "master");

            const keycloak = new Keycloak({
              url: "http://localhost:8081/auth/",
              realm: "master",
              clientId: "react-app",
            });

            keycloak
              .init({
                url: "http://localhost:8081/auth/",
                realm: "master",
                clientId: "react-app",
              })
              .then((logged) => {
                if (!logged) {
                  console.log("nao logado indo pro login como master");
                  keycloak.login({ redirectUri: "http://172.18.92.4:3000/" });
                } else {
                  console.log("teste");
                  window.location.href = "/";
                }
              });
          }}
        >
          <Box style={{ flex: 1, display: "flex" }}>
            <BusinessRounded
              style={{ transform: "scale(2)", color: "#5D6A75" }}
            />
          </Box>
          <Box
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              style={{
                fontFamily: "Public Sans",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 24,
                lineHeight: "100%",
                color: "#5D6A75",
              }}
            >
              Acessar como fornecedor
            </Typography>
            <ArrowForwardRounded
              style={{ transform: "scale(2)", color: "#5D6A75" }}
            />
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
