import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useUpdateUserMutation } from "../../generated/graphql";
import { userSearchEngine, userState } from "../../recoils/userState";
import SearchBarPresenter from "./SearchBarPresenter";
import { TSearchEngine } from "./type";

const SearchBarContainer = () => {
  const [updateUser] = useUpdateUserMutation();
  const { id, searchEngine } = useRecoilValue(userState);
  const setUserSearchEngine = useSetRecoilState(userSearchEngine);

  const onChangeSearchEngine = async (search_engine: TSearchEngine) => {
    try {
      setUserSearchEngine(search_engine);
      await updateUser({
        variables: { id, search_engine },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onSearch = (val: string) => {
    const searchUrl =
      searchEngine === "google"
        ? `https://www.google.com/search?q=`
        : `https://search.naver.com/search.naver?&query=`;
    window.open(`${searchUrl}${val}`);
  };

  return (
    <SearchBarPresenter
      searchEngine={searchEngine}
      onChangeSearchEngine={onChangeSearchEngine}
      onSearch={onSearch}
    />
  );
};

export default SearchBarContainer;
