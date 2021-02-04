import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { FileCopy } from "@material-ui/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Bookmark from "../../component/Bookmark";
import { TBookmarkItem } from "../../component/Bookmark/type";
import BookmarkDialogButton from "../../component/BookmarkDialogButton";
import SkeletonBookmark from "../../component/Bookmark/SkeletonBookmark";

interface Props {
  isOwner: boolean;
  isAuthCheck: boolean;
  addProps: {
    refetch: () => void;
  };
  bookmarkProps: {
    items?: TBookmarkItem;
    deleteLoading: boolean;
    onDelete: (name: string, id: string) => void;
  };
  copyProps: {
    href: string;
    onCopy: () => void;
  };
}

function DetailPresenter({
  isOwner,
  isAuthCheck,
  addProps,
  bookmarkProps,
  copyProps,
}: Props) {
  const Content = () => {
    if (!isAuthCheck) {
      return <SkeletonBookmark items={bookmarkProps.items} />;
    }
    if (bookmarkProps.items?.length === 0) {
      return (
        <Typography variant="body2" align="center" style={{ marginTop: 32 }}>
          등록된 북마크가 없습니다
        </Typography>
      );
    }
    return <Bookmark {...bookmarkProps} isOwner={isOwner} />;
  };

  const CopyBookmarkButton = () => (
    <CopyToClipboard text={copyProps.href} onCopy={copyProps.onCopy}>
      <Button variant="text" startIcon={<FileCopy />}>
        북마크 공유
      </Button>
    </CopyToClipboard>
  );

  return (
    <Container maxWidth="md">
      <Grid container justify="flex-end" alignItems="center" spacing={1}>
        <Grid item>
          <BookmarkDialogButton isOwner={isOwner} refetch={addProps.refetch} />
        </Grid>
        <Grid item>
          <CopyBookmarkButton />
        </Grid>
      </Grid>

      <Content />
    </Container>
  );
}

export default DetailPresenter;
