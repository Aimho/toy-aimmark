import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import LoginButtons from "../LoginButtons";
import { useAppBarStyles } from "./style";

function AppBarPresenter() {
  const classes = useAppBarStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static" color="transparent" component="section">
        <Toolbar>
          <Link to="/" style={{ marginRight: "auto" }}>
            <Typography noWrap variant="h6" className={classes.title}>
              AimMark
            </Typography>
          </Link>

          <LoginButtons />
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default AppBarPresenter;
