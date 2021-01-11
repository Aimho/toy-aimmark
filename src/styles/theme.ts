import { createMuiTheme } from '@material-ui/core';
import colorSet from './colorSet';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: colorSet.primary50,
      main: colorSet.primary500,
      dark: colorSet.primary800
    },
    secondary: {
      main: colorSet.primary1000
    },
    error: {
      light: colorSet.errorLight,
      main: colorSet.errorBase,
      dark: colorSet.errorDark
    },
    warning: {
      light: colorSet.warningLight,
      main: colorSet.warningBase,
      dark: colorSet.warningDark
    },
    text: {
      primary: colorSet.gray900,
      secondary: colorSet.gray600,
      disabled: colorSet.gray300
    }
  }
});

export default theme;
