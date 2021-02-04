import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";

import Bookmark from "../../component/Bookmark";
import { TBookmarkItem } from "../../component/Bookmark/type";

interface Props {
  items?: TBookmarkItem;
}

function HomePresenter({ items }: Props) {
  return (
    <Container maxWidth="md">
      <Grid container justify="space-between" spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h4"
            gutterBottom
            style={{ marginTop: 24, lineHeight: 1.8 }}
          >
            손쉽게
            <br />
            <Typography color="primary" variant="h3" component="span">
              북마크
            </Typography>
            를 만들고 <br />
            공유해보세요!
          </Typography>

          <Button
            variant="contained"
            href="https://aimho.github.io/toy-aimmark/"
            target="_blank"
            color="primary"
          >
            AimMark 소개
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Bookmark items={items} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePresenter;
