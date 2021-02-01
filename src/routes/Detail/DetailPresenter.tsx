import React from "react";
import { Container } from "@material-ui/core";

import Bookmark from "../../component/Bookmark";
import { TBookmarkItem } from "../../component/Bookmark/type";
import BookmarkDialogButton from "../../component/BookmarkDialogButton";
import { Actions } from "./style";
import SkeletonBookmark from "../../component/Bookmark/SkeletonBookmark";

interface Props {
  isOwner: boolean;
  isAuthCheck: boolean;
  refetch: () => void;
  onDelete: (name: string, id: string) => void;
  deleteLoading: boolean;
  items?: TBookmarkItem;
}

function DetailPresenter({
  isOwner,
  isAuthCheck,
  refetch,
  onDelete,
  deleteLoading,
  items,
}: Props) {
  const Content = () => {
    if (!isAuthCheck) {
      return <SkeletonBookmark items={items} />;
    }
    return (
      <Bookmark
        isOwner={isOwner}
        onDelete={onDelete}
        loading={deleteLoading}
        items={items}
      />
    );
  };
  return (
    <Container maxWidth="md">
      <Actions>
        <BookmarkDialogButton isOwner={isOwner} refetch={refetch} />
      </Actions>

      <Content />
    </Container>
  );
}

export default DetailPresenter;
