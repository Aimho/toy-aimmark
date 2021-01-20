import { Grid, Typography } from "@material-ui/core";
import React from "react";
import BookmarkButtons from "./BookmarkButtons";
import { MuiIconButton } from "./styled";

interface Props {
  items?: Array<{ url: string; name: string; id: any }>;
}

const BookmarkPresenter = (props: Props) => {
  const onOpenUrl = (url: string) => {
    window.open(url);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <BookmarkButtons />
      </Grid>

      {props.items?.map((item, index) => {
        const baseUrl = new URL(item.url).origin;

        return (
          <Grid item key={index}>
            <MuiIconButton onClick={() => onOpenUrl(item.url)}>
              <img
                width="32"
                height="32"
                src={`${baseUrl}/favicon.ico`}
                alt={baseUrl}
              />
            </MuiIconButton>
            <Typography variant="caption" align="center" component="p">
              {item.name}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BookmarkPresenter;
