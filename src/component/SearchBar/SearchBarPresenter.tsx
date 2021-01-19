import React from "react";
import { TextField, InputAdornment, Select, MenuItem } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";
import { TSearchEngine } from "./type";

interface Props {
  searchEngine: TSearchEngine;
  onChangeSearchEngine: (_: any) => void;
  onSearch: (_: string) => void;
}

const SearchBarPresenter = (props: Props) => (
  <TextField
    fullWidth
    placeholder="검색 또는 URL 입력"
    onKeyUp={(event: any) => {
      if (event.key === "Enter") {
        props.onSearch(event.target.value);
      }
    }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Select
            id="search-select"
            labelId="search-select"
            value={props.searchEngine}
            onChange={(event) => {
              props.onChangeSearchEngine(event.target.value);
            }}
            disableUnderline
          >
            <MenuItem value={"google"}>Google</MenuItem>
            <MenuItem value={"naver"}>Naver</MenuItem>
          </Select>
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">
          <SearchRounded />
        </InputAdornment>
      ),
    }}
  />
);

export default SearchBarPresenter;
