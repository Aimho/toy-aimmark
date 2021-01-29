import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  FaviconContainer,
  MuiButtonBase,
  MuiCircleProgress,
  MuiClose,
  MuiPaper,
  MuiPrivate,
} from "./style";
import { TBookmarkItem } from "./type";
import { faviconImgProps, getBaseUrl, openUrl } from "../../utils";

interface Props {
  isOwner?: boolean;
  onDelete?: (name: string, id: string) => void;
  loading?: boolean;
  items?: TBookmarkItem;
}

const BookmarkPresenter = (props: Props) => (
  <Grid container spacing={2}>
    {props.items?.map((item, index) => {
      const baseUrl = item.base_url ? item.base_url : getBaseUrl(item.url);

      const PrivateIcon = () => {
        if (!item.is_private) return null;
        return <MuiPrivate />;
      };

      const DeleteButton = () => {
        if (!props.isOwner) return null;

        const onDelete = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
          e.preventDefault();
          e.stopPropagation();
          props.onDelete!(item.name, item.id);
        };

        if (props.loading) return <MuiCircleProgress size={16} />;
        return <MuiClose onClick={onDelete} />;
      };

      const gridItemStyle = () => {
        const grow = Math.floor(item.name.length / 10) + 1;
        return {
          flexGrow: grow,
          maxWidth: "345px",
        };
      };

      return (
        <Grid item key={index} style={gridItemStyle()}>
          <MuiButtonBase focusRipple onClick={() => openUrl(item.url)}>
            <MuiPaper>
              <DeleteButton />
              <FaviconContainer>
                <PrivateIcon />
                <img alt={item.name} {...faviconImgProps(baseUrl)} />
              </FaviconContainer>
              <Typography variant="caption">{item.name}</Typography>
            </MuiPaper>
          </MuiButtonBase>
        </Grid>
      );
    })}
  </Grid>
);

export default BookmarkPresenter;
