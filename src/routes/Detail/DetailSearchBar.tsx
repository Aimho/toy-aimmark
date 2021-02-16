import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import { Button, Grid, InputAdornment, Container } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";

import { getSearchUrl, openUrl } from "../../utils";
import { userSearchEngine } from "../../recoils/userState";
import { SearchInput, SearchIcon } from "./style";

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
      <SearchIcon size="small" onClick={onSearch}>
        <SearchRounded />
      </SearchIcon>
    </InputAdornment>
  );

  return (
    <Container component="section" style={{ margin: "32px auto" }}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Button>Naver</Button>
        </Grid>
        <Grid item xs={8} sm={10}>
          <SearchInput
            fullWidth
            onKeyUp={onKeyUp}
            variant="outlined"
            placeholder="Search + Enter :)"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            InputProps={{ endAdornment }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailSearchBar;
