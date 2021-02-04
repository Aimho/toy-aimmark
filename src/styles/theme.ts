import { createMuiTheme } from "@material-ui/core";
import colorSet from "./colorSet";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: colorSet.primaryLight,
      main: colorSet.primaryBase,
      dark: colorSet.primaryDark,
    },
    error: {
      light: colorSet.errorLight,
      main: colorSet.errorBase,
      dark: colorSet.errorDark,
    },
    warning: {
      light: colorSet.warningLight,
      main: colorSet.warningBase,
      dark: colorSet.warningDark,
    },
    text: {
      primary: colorSet.gray900,
      secondary: colorSet.gray600,
      disabled: colorSet.gray300,
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
