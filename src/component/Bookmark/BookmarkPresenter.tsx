import React from "react";
import { ButtonBase, Grid, Typography } from "@material-ui/core";
import { MuiCircleProgress, MuiClose, MuiPaper } from "./style";

interface Props {
  isOwner: boolean;
  onDelete: (name: string, id: string) => void;
  loading: boolean;
  items?: Array<{ url: string; name: string; id: any }>;
}

const BookmarkPresenter = (props: Props) => (
  <Grid container spacing={2}>
    {props.items?.map((item, index) => {
      const onOpenUrl = () => {
        window.open(item.url);
      };

      const baseUrl = new URL(item.url).origin;

      const imgProps = {
        src: `${baseUrl}/favicon.ico`,
        onError: (e: any) => {
          e.target.src = `https://www.google.com/s2/favicons?sz=64&domain_url=${baseUrl}`;
        },
      };

      const DeleteButton = () => {
        if (!props.isOwner) return null;

        const onDelete = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
          e.preventDefault();
          e.stopPropagation();
          props.onDelete(item.name, item.id);
        };

        if (props.loading) return <MuiCircleProgress size={16} />;
        return <MuiClose onClick={onDelete} />;
      };

      return (
        <Grid item key={index}>
          <ButtonBase focusRipple onClick={onOpenUrl}>
            <MuiPaper>
              <DeleteButton />
              <img alt={item.name} {...imgProps} />
              <Typography variant="caption">{item.name}</Typography>
            </MuiPaper>
          </ButtonBase>
        </Grid>
      );
    })}
  </Grid>
);

export default BookmarkPresenter;
