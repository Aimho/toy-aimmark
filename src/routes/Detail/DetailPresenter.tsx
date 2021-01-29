import React from "react";
import { Container } from "@material-ui/core";

import Bookmark from "../../component/Bookmark";
import SearchBar from "../../component/SearchBar";
import { TBookmarkItem } from "../../component/Bookmark/type";
import BookmarkDialogButton from "../../component/BookmarkDialogButton";
import {
  StyledDetail,
  StyledDetailHeader,
  StyledDetailContentAction,
} from "./style";

interface Props {
  isOwner: boolean;
  refetch: () => void;
  onDelete: (name: string, id: string) => void;
  deleteLoading: boolean;
  items?: TBookmarkItem;
}

function DetailPresenter({
  isOwner,
  refetch,
  onDelete,
  deleteLoading,
  items,
}: Props) {
  return (
    <StyledDetail>
      <Container maxWidth="md">
        <StyledDetailHeader>
          <SearchBar />
        </StyledDetailHeader>

        <StyledDetailContentAction>
          <BookmarkDialogButton isOwner={isOwner} refetch={refetch} />
        </StyledDetailContentAction>

        <Bookmark
          isOwner={isOwner}
          onDelete={onDelete}
          loading={deleteLoading}
          items={items}
        />
      </Container>
    </StyledDetail>
  );
}

export default DetailPresenter;
