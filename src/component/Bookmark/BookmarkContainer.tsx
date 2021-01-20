import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserItemQuery } from "../../generated/graphql";
import BookmarkPresenter from "./BookmarkPresenter";

const BookmarkContainer = () => {
  const { id } = useParams() as any;
  const { data } = useGetUserItemQuery({
    variables: { user_id: id },
    pollInterval: 1000,
  });

  return <BookmarkPresenter items={data?.item as any} />;
};

export default BookmarkContainer;
