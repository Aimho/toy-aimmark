import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { SnackbarProvider } from "notistack";

import theme from "../../styles/theme";
import GlobalStyle from "../../styles/GlobalStyles";
import snackbarStyles from "../../styles/snackbarStyles";
import AppPresenter from "./AppPresenter";

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
          <AppPresenter />
        </SnackbarProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default AppContainer;
