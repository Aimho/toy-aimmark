import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import { SearchRounded } from "@material-ui/icons";
import { Grid, InputAdornment, Container } from "@material-ui/core";

import { getSearchUrl, openUrl } from "../../utils";
import { userSearchEngine } from "../../recoils/userState";
import { MuiIconButton } from "../../styles/customStyles";
import { SearchInput } from "./style";
import DetailSearchEngine from "./DetailSearchEngine";

const DetailSearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const searchEngine = useRecoilValue(userSearchEngine);

  const onSearch = () => {
    openUrl(`${getSearchUrl(searchEngine)}${searchText}`);
    setSearchText("");
  };

  const onKeyUp = (e: any) => {
    if (e.key === "Enter") return onSearch();
  };

  const endAdornment = (
    <InputAdornment position="end">
      <MuiIconButton size="small" onClick={onSearch}>
        <SearchRounded />
      </MuiIconButton>
    </InputAdornment>
  );

  return (
    <Container
      maxWidth="md"
      component="section"
      style={{ margin: "48px auto" }}
    >
      <Grid
        container
        spacing={2}
        wrap="nowrap"
        alignItems="center"
        justify="space-between"
      >
        <Grid item>
          <DetailSearchEngine />
        </Grid>
        <SearchInput
          fullWidth
          size="small"
          onKeyUp={onKeyUp}
          variant="outlined"
          placeholder="Search + Enter :)"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{ endAdornment }}
        />
      </Grid>
    </Container>
  );
};

export default DetailSearchBar;
