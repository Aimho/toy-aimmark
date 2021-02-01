import React from "react";
import { Grid } from "@material-ui/core";
import { FaviconContainer, MuiButtonBase, MuiPaper } from "./style";
import { TBookmarkItem } from "./type";
import { Skeleton } from "@material-ui/lab";

interface Props {
  items?: TBookmarkItem;
}

const SkeletonBookmark = (props: Props) => (
  <Grid container spacing={2}>
    {props.items?.map((item, index) => {
      const nameLength = item.name.length * 7;
      const gridItemStyle = () => {
        const grow = Math.floor(item.name.length / 10) + 1;
        return {
          flexGrow: grow,
          maxWidth: "345px",
        };
      };

      return (
        <Grid item key={index} style={gridItemStyle()}>
          <MuiButtonBase focusRipple disabled>
            <MuiPaper>
              <FaviconContainer>
                <Skeleton
                  variant="rect"
                  animation="wave"
                  width={32}
                  height={32}
                />
              </FaviconContainer>
              <Skeleton
                variant="text"
                animation="wave"
                width={nameLength}
                height={20}
              />
            </MuiPaper>
          </MuiButtonBase>
        </Grid>
      );
    })}
  </Grid>
);

export default SkeletonBookmark;
