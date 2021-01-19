import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { SnackbarProvider } from "notistack";

import theme from "../../styles/theme";
import GlobalStyle from "../../styles/GlobalStyles";
import snackbarStyles from "../../styles/snackbarStyles";

import AppPresenter from "./AppPresenter";
import AppBar from "../AppBar";

const AppContainer: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          classes={{ ...snackbarStyles() }}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <GlobalStyle />

          <RecoilRoot>
            <AppBar />
            <AppPresenter />
          </RecoilRoot>
        </SnackbarProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default AppContainer;
