import React from "react";
import { Container, Typography } from "@material-ui/core";

import { StyledHome, StyledHomeHeader } from "./style";

function HomePresenter() {
  return (
    <StyledHome>
      <Container maxWidth="lg">
        <StyledHomeHeader>
          <Typography variant="h4" align="center">
            자신만의 북마크를 만들고 공유해보세요!
          </Typography>
        </StyledHomeHeader>
      </Container>
    </StyledHome>
  );
}

export default HomePresenter;
