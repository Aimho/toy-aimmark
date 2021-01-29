import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useUpdateUserMutation } from "../../generated/graphql";
import { userSearchEngine, userState } from "../../recoils/userState";
import SearchBarPresenter from "./SearchBarPresenter";
import { TSearchEngine } from "./type";

const SearchBarContainer = () => {
  const [updateUser, { loading }] = useUpdateUserMutation();
  const { id, searchEngine } = useRecoilValue(userState);
  const setUserSearchEngine = useSetRecoilState(userSearchEngine);

  const onChangeSearchEngine = async (search_engine: TSearchEngine) => {
    try {
      await updateUser({
        variables: { id, search_engine },
      });
      setUserSearchEngine(search_engine);
    } catch (error) {
      console.error(error);
    }
  };

  const onSearch = (val: string) => {
    const searchUrl = () => {
      switch (searchEngine) {
        case "google":
          return `https://www.google.com/search?q=`;
        case "naver":
          return `https://search.naver.com/search.naver?&query=`;
        // youtube
        default:
          return "https://www.youtube.com/results?search_query=";
      }
    };
    window.open(`${searchUrl()}${val}`);
  };

  return (
    <SearchBarPresenter
      loading={loading}
      searchEngine={searchEngine}
      onChangeSearchEngine={onChangeSearchEngine}
      onSearch={onSearch}
    />
  );
};

export default SearchBarContainer;
