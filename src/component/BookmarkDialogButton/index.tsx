import React from "react";
import { Grid } from "@material-ui/core";
import BookmarkDialog from "./BookmarkDialog";

interface Props {
  isOwner: boolean;
  refetch: () => void;
}

const BookmarkDialogButton = ({ isOwner, refetch }: Props) => {
  if (!isOwner) return null;
  return (
    <Grid container justify="flex-end" alignItems="center" spacing={1}>
      <Grid item>
        <BookmarkDialog onCloseCallBack={refetch} />
      </Grid>
    </Grid>
  );
};

export default BookmarkDialogButton;
