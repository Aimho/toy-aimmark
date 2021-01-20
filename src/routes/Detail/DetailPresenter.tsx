import React from "react";
import { Container, Grid } from "@material-ui/core";

import Bookmark from "../../component/Bookmark";
import SearchBar from "../../component/SearchBar";
import {
  StyledDetail,
  StyledDetailHeader,
  StyledDetailContents,
} from "./styled";

function DetailPresenter() {
  return (
    <StyledDetail>
      <Container maxWidth="lg">
        <StyledDetailHeader>
          <Grid container justify="center" alignItems="center">
            <Grid item sm={6} xs={12}>
              <SearchBar />
            </Grid>
          </Grid>
        </StyledDetailHeader>

        <StyledDetailContents>
          <Bookmark />
        </StyledDetailContents>
      </Container>
    </StyledDetail>
  );
}

export default DetailPresenter;
