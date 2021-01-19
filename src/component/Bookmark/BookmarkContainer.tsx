import React from "react";
import { useRecoilValue } from "recoil";
import { useGetUserItemQuery } from "../../generated/graphql";
import { userState } from "../../recoils/userState";
import BookmarkPresenter from "./BookmarkPresenter";

const BookmarkContainer = () => {
  const { id } = useRecoilValue(userState);
  const { data } = useGetUserItemQuery({
    variables: { user_id: id },
    pollInterval: 1000,
  });

  console.log(data?.item);

  return <BookmarkPresenter items={data?.item as any} />;
};

export default BookmarkContainer;
