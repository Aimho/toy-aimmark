import React from "react";
import { Container, Grid } from "@material-ui/core";

import Bookmark from "../../component/Bookmark";
import SearchBar from "../../component/SearchBar";
import { StyledHome, StyledHomeHeader, StyledHomeContents } from "./styled";

function Home() {
  return (
    <StyledHome>
      <Container maxWidth="lg">
        <StyledHomeHeader>
          <Grid container justify="center" alignItems="center">
            <Grid item sm={6} xs={12}>
              <SearchBar />
            </Grid>
          </Grid>
        </StyledHomeHeader>

        <StyledHomeContents>
          <Bookmark />
        </StyledHomeContents>
      </Container>
    </StyledHome>
  );
}

export default Home;
