import React from "react";
import { useRecoilValue } from "recoil";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";

import { userState } from "../../recoils/userState";

import {
  useDeleteItemMutation,
  useGetUserItemQuery,
} from "../../generated/graphql";
import DetailPresenter from "./DetailPresenter";

function Detail() {
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
    <DetailPresenter
      isOwner={isOwner}
      refetch={refetch}
      onDelete={onDelete}
      deleteLoading={deleteItemState.loading}
      items={data?.item}
    />
  );
}

export default Detail;
