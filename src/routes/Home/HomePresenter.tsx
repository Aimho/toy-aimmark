import React from "react";
import { Container, Typography } from "@material-ui/core";

import { StyledHome, StyledHomeContent, StyledHomeHeader } from "./style";
import Bookmark from "../../component/Bookmark";

interface Props {
  items?: Array<{ url: string; name: string; id: any }>;
}

function HomePresenter({ items }: Props) {
  return (
    <StyledHome>
      <Container maxWidth="md">
        <StyledHomeHeader>
          <Typography variant="h5" align="center">
            손쉽게 북마크를 만들고 <br />
            공유해보세요!
          </Typography>
        </StyledHomeHeader>

        <StyledHomeContent>
          <Typography variant="subtitle1" align="center" gutterBottom>
            등록된 북마크
          </Typography>
          <Bookmark items={items} />
        </StyledHomeContent>
      </Container>
    </StyledHome>
  );
}

export default HomePresenter;
