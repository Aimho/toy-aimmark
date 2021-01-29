import React from "react";
import BookmarkDialog from "./BookmarkDialog";

interface Props {
  isOwner: boolean;
  refetch: () => void;
}

const BookmarkDialogButton = ({ isOwner, refetch }: Props) => {
  if (!isOwner) return null;
  return <BookmarkDialog onCloseCallBack={refetch} />;
};

export default BookmarkDialogButton;
