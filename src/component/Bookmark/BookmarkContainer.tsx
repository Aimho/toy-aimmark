import React from "react";
import { useRecoilValue } from "recoil";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import { userState } from "../../recoils/userState";

import {
  useDeleteItemMutation,
  useGetUserItemQuery,
} from "../../generated/graphql";

import BookmarkPresenter from "./BookmarkPresenter";
import BookmarkButtons from "./BookmarkButtons";

const BookmarkContainer = () => {
  const { id } = useParams() as any;
  const { enqueueSnackbar } = useSnackbar();
  const { data, refetch } = useGetUserItemQuery({
    variables: { user_id: id },
  });

  const m_userState = useRecoilValue(userState);
  const [deleteItem, deleteItemState] = useDeleteItemMutation();
  const isOwner = id === m_userState.id ? true : false;
  const onDelete = (name: string, id: string) => {
    if (!isOwner) return null;
    deleteItem({ variables: { id } })
      .then(() =>
        enqueueSnackbar(`${name} 북마크 삭제되었습니다.`, {
          variant: "success",
        })
      )
      .catch(() =>
        enqueueSnackbar(`${name} 북마크 삭제 실패하였습니다.`, {
          variant: "error",
        })
      )
      .finally(refetch);
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BookmarkButtons isOwner={isOwner} refetch={refetch} />
        </Grid>
      </Grid>

      <BookmarkPresenter
        isOwner={isOwner}
        onDelete={onDelete}
        loading={deleteItemState.loading}
        items={data?.item as any}
      />
    </React.Fragment>
  );
};

export default BookmarkContainer;
