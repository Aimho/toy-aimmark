import React from "react";
import {
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { GitHub } from "@material-ui/icons";

import AppBar from "../AppBar";
import SearchBar from "../SearchBar";

import { LayoutWrapper, LayoutFooter } from "./style";

const LayoutPresenter: React.FC = ({ children }) => (
  <React.Fragment>
    <AppBar />

    <LayoutWrapper>
      <Container maxWidth="md" style={{ marginBottom: 32 }}>
        <SearchBar />
      </Container>

      {children}
    </LayoutWrapper>

    <LayoutFooter>
      <Container maxWidth="md">
        <Grid container spacing={1} justify="center" alignItems="center">
          <Grid item xs={12}>
            <IconButton
              size="small"
              href="https://github.com/Aimho/toy-bookmark"
            >
              <GitHub />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="small"
              variant="text"
              color="primary"
              href="mailTo:aimho@icloud.com"
              startIcon={
                <Typography variant="caption" component="span">
                  Copyright © 2021
                </Typography>
              }
            >
              aimho@icloud.com
            </Button>
          </Grid>
        </Grid>
      </Container>
    </LayoutFooter>
  </React.Fragment>
);

export default LayoutPresenter;
