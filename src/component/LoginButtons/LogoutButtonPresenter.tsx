import React from "react";
import { Button, Grid } from "@material-ui/core";

interface Props {
  onSignOut: () => void;
}

const LogoutButton = (props: Props) => (
  <div>
    <Grid container alignItems="center">
      <Grid item>
        <Button
          size="small"
          color="inherit"
          variant="text"
          onClick={props.onSignOut}
        >
          로그아웃
        </Button>
      </Grid>
    </Grid>
  </div>
);

export default LogoutButton;
