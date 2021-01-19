import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import LoginButtons from "../LoginButtons";
import { useAppBarStyles } from "./style";

export default function SearchAppBar() {
  const classes = useAppBarStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static" color="transparent" component="section">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            AimMark
          </Typography>
          {/* todo: tag search updates */}
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div> */}

          <LoginButtons />
        </Toolbar>
      </AppBar>
    </header>
  );
}
