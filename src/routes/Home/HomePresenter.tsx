import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import SearchBar from "../../component/SearchBar";
import { StyledHome, StyledHomeHeader } from "./styled";

function HomePresenter() {
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

        <Typography variant="h4" align="center">
          자신만의 북마크를 만들고 공유해보세요!
        </Typography>
      </Container>
    </StyledHome>
  );
}

export default HomePresenter;
