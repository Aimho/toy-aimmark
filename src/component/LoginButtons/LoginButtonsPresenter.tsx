import React from "react";
import { Button, Grid } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";

import { Google } from "../../Icon";

interface Props {
  onSignInGoogle: () => void;
}

const LoginButtonsPresenter = (props: Props) => (
  <Grid container spacing={2} justify="center">
    <Grid item xs={12}>
      <Button
        fullWidth
        variant="contained"
        onClick={props.onSignInGoogle}
        style={{ backgroundColor: "#ea4335", color: "#fff" }}
        startIcon={<Google />}
      >
        Google로 계속하기
      </Button>
    </Grid>
    <Grid item xs={12}>
      <Button
        fullWidth
        variant="contained"
        style={{ backgroundColor: "#3b5998", color: "#fff" }}
        startIcon={<Facebook />}
      >
        Facebook으로 계속하기
      </Button>
    </Grid>
  </Grid>
);

export default LoginButtonsPresenter;
