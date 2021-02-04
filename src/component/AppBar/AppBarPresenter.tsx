import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import LoginButtons from "../LoginButtons";
import { useAppBarStyles } from "./style";
import config from "../../config";

function AppBarPresenter() {
  const classes = useAppBarStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static" color="transparent" component="section">
        <Toolbar style={{ minHeight: 56 }}>
          <Link
            to="/"
            style={{
              marginRight: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography noWrap variant="h6" className={classes.title}>
              AimMark
            </Typography>
            <Typography variant="caption" component="span">
              v.{config.version}
            </Typography>
          </Link>

          <LoginButtons />
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default AppBarPresenter;
