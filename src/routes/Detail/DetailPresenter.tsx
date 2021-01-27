import React from "react";
import { Container } from "@material-ui/core";

import Bookmark from "../../component/Bookmark";
import SearchBar from "../../component/SearchBar";
import BookmarkDialogButton from "../../component/BookmarkDialogButton";
import { StyledDetail, StyledDetailHeader } from "./style";

interface Props {
  isOwner: boolean;
  refetch: () => void;
  onDelete: (name: string, id: string) => void;
  deleteLoading: boolean;
  items?: Array<{ url: string; name: string; id: any }>;
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

        <BookmarkDialogButton isOwner={isOwner} refetch={refetch} />

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
