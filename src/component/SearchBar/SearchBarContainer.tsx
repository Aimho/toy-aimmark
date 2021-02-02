import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useUpdateUserMutation } from "../../generated/graphql";
import { renderState } from "../../recoils/renderState";
import { userSearchEngine, userId } from "../../recoils/userState";
import {
  faviconImgProps,
  getBaseUrl,
  getSearchUrl,
  openUrl,
} from "../../utils";
import SearchBarPresenter from "./SearchBarPresenter";
import { SearchEngineFavicon } from "./style";
import { TSearchEngine } from "./type";

const SearchBarContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [updateUser, { loading }] = useUpdateUserMutation();
  const { isAuthCheck } = useRecoilValue(renderState);
  const id = useRecoilValue(userId);
  const searchEngine = useRecoilValue(userSearchEngine);
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

  const favicon = (search_engine: TSearchEngine) => {
    const baseUrl = getBaseUrl(getSearchUrl(search_engine));
    return (
      <SearchEngineFavicon {...faviconImgProps(baseUrl)} alt={searchEngine} />
    );
  };

  const onSearch = () => openUrl(`${getSearchUrl(searchEngine)}${searchText}`);

  return (
    <SearchBarPresenter
      loading={loading}
      isAuthCheck={isAuthCheck}
      searchEngine={{
        favicon: favicon,
        value: searchEngine,
      }}
      onChangeSearchEngine={onChangeSearchEngine}
      searchText={searchText}
      onChangeSearchText={setSearchText}
      onSearch={onSearch}
    />
  );
};

export default SearchBarContainer;
