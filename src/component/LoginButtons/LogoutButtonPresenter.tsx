import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

interface Props {
  id: string;
  onSignOut: () => void;
}

const LogoutButton = (props: Props) => (
  <div>
    <Grid container alignItems="center">
      <Grid item>
        <Link to={`/${props.id}`}>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Link>
      </Grid>
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
