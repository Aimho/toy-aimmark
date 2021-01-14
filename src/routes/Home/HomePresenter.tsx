import React from "react";
import { Card, Container, Typography } from "@material-ui/core";

import LoginButtons from "../../component/LoginButtons";
import { StyledHome, StyledLogin, StyledBanner } from "./styled";

function Home() {
  return (
    <StyledHome>
      <Container maxWidth="xs">
        <Card variant="outlined">
          <StyledBanner>
            <Typography variant="h4" align="center">
              Toy Bookmark
            </Typography>
          </StyledBanner>
          <StyledLogin>
            <LoginButtons />
          </StyledLogin>
        </Card>
      </Container>
    </StyledHome>
  );
}

export default Home;
