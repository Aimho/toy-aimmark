import React from "react";
import { Container } from "@material-ui/core";

import Bookmark from "../../component/Bookmark";
import SearchBar from "../../component/SearchBar";
import { StyledDetail, StyledDetailHeader } from "./style";

function DetailPresenter() {
  return (
    <StyledDetail>
      <Container maxWidth="md">
        <StyledDetailHeader>
            <SearchBar />
        </StyledDetailHeader>

        <Bookmark />
      </Container>
    </StyledDetail>
  );
}

export default DetailPresenter;
