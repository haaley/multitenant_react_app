import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { initKeycloakWithConfig } from "../keycloak";
import {
  ArrowForwardRounded,
  BusinessRounded,
  PersonRounded,
} from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    flexDirection: "column",
  },
  textBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer:{
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#E5E5E5",
    borderRadius: 25,
  },
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
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.textBox}>
        <Typography variant="h4" style={{ textAlign: "left", padding: 24 }}>
          Escolha como deseja realizar login
        </Typography>
      </Box>
      <Container
        className={classes.loginContainer}
      >
        <Box
          className={classes.optionStyle}
          onClick={() => initKeycloakWithConfig("slave")}
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
          onClick={() => initKeycloakWithConfig("master")}
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
