import React from "react";
import { useParams } from "react-router-dom";
import DetailHeader from "./DetailHeader";
import DetailSearchBar from "./DetailSearchBar";

const DetailContainer = () => {
  const { userId } = useParams() as any;

  return (
    <React.Fragment>
      <DetailHeader userId={userId} />
      <DetailSearchBar />
    </React.Fragment>
  );
};

export default DetailContainer;
