import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useUpdateUserMutation } from "../../generated/graphql";
import { userSearchEngine, userState } from "../../recoils/userState";
import { faviconImgProps, getBaseUrl, openUrl } from "../../utils";
import SearchBarPresenter from "./SearchBarPresenter";
import { SearchEngineFavicon } from "./style";
import { TSearchEngine } from "./type";

const SearchBarContainer = () => {
  const [updateUser, { loading }] = useUpdateUserMutation();
  const { id, searchEngine } = useRecoilValue(userState);
  const setUserSearchEngine = useSetRecoilState(userSearchEngine);

  const searchUrl = (search_engine: TSearchEngine) => {
    switch (search_engine) {
      case "google":
        return `https://www.google.com/search?q=`;
      case "naver":
        return `https://search.naver.com/search.naver?&query=`;
      // youtube
      default:
        return "https://www.youtube.com/results?search_query=";
    }
  };

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

  const favicon = (search_engine: TSearchEngine) => {
    const baseUrl = getBaseUrl(searchUrl(search_engine));
    return (
      <SearchEngineFavicon {...faviconImgProps(baseUrl)} alt={searchEngine} />
    );
  };

  return (
    <SearchBarPresenter
      loading={loading}
      searchEngine={{
        favicon: favicon,
        value: searchEngine,
      }}
      onChangeSearchEngine={onChangeSearchEngine}
      onSearch={(val) => openUrl(`${searchUrl(searchEngine)}${val}`)}
    />
  );
};

export default SearchBarContainer;
