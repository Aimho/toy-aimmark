import React from "react";
import { useParams } from "react-router-dom";
import DetailHeader from "./DetailHeader";
import DetailBookmark from "./DetailBookmark";
import DetailSearchBar from "./DetailSearchBar";

const DetailContainer = () => {
  const { ownerId } = useParams() as any;

  return (
    <React.Fragment>
      <DetailHeader ownerId={ownerId} />
      <DetailSearchBar />
      <DetailBookmark ownerId={ownerId} />
    </React.Fragment>
  );
};

export default DetailContainer;
