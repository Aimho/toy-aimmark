import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider as StyledProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { SnackbarProvider } from "notistack";

import theme from "./theme";
import GlobalStyle from "./GlobalStyles";
import { snackbarStyles } from "./customStyles";

const ThemeProvider: React.FC = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <StyledProvider theme={theme}>
      <SnackbarProvider
        maxSnack={1}
        classes={{ ...snackbarStyles() }}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <GlobalStyle />

        <RecoilRoot>{children}</RecoilRoot>
      </SnackbarProvider>
    </StyledProvider>
  </MuiThemeProvider>
);

export default ThemeProvider;
