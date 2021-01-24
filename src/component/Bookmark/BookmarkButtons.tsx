import React from "react";
import { Grid } from "@material-ui/core";
import BookmarkDialog from "./BookmarkDialog";

interface Props {
  isOwner: boolean;
  refetch: () => void;
}

const BookmarkButtons = ({ isOwner, refetch }: Props) => {
  if (!isOwner) return null;
  return (
    <Grid container justify="flex-end" alignItems="center" spacing={1}>
      {/* todo align item */}
      {/* <Grid item>
        <ButtonGroup variant="outlined" color="primary" size="small">
          <Button>
            <FormatAlignLeft />
          </Button>
          <Button>
            <FormatAlignCenter />
          </Button>
          <Button>
            <FormatAlignRight />
          </Button>
        </ButtonGroup>
      </Grid> */}
      <Grid item>
        <BookmarkDialog onCloseCallBack={refetch} />
      </Grid>
    </Grid>
  );
};

export default BookmarkButtons;
