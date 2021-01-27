import React from "react";
import { useGetAllItemQuery } from "../../generated/graphql";
import HomePresenter from "./HomePresenter";

function Home() {
  const { data } = useGetAllItemQuery();

  return <HomePresenter items={data?.item} />;
}

export default Home;
