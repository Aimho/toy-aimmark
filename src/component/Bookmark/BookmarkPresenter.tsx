import React from "react";
import { Chip, Grid, Typography } from "@material-ui/core";
import { MuiAvatar, MuiClose } from "./style";

interface Props {
  isOwner: boolean;
  onDelete: (name: string, id: string) => void;
  items?: Array<{ url: string; name: string; id: any }>;
}

const BookmarkPresenter = (props: Props) => {
  const onOpenUrl = (url: string) => {
    window.open(url);
  };

  return (
    <React.Fragment>
      {props.items?.map((item, index) => {
        const baseUrl = new URL(item.url).origin;

        const icon = (
          <MuiAvatar src={`${baseUrl}/favicon.ico`}>
            <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
              {item.name[0]}
            </Typography>
          </MuiAvatar>
        );

        const label = <Typography variant="body2">{item.name}</Typography>;

        return (
          <Grid item key={index}>
            <Chip
              clickable
              avatar={icon}
              label={label}
              color="primary"
              variant="outlined"
              onClick={() => onOpenUrl(item.url)}
              deleteIcon={props.isOwner ? <MuiClose /> : <></>}
              onDelete={() => props.onDelete(item.name, item.id)}
            />
          </Grid>
        );
      })}
    </React.Fragment>
  );
};

export default BookmarkPresenter;
