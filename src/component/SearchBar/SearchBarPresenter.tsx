import React from "react";
import {
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  CircularProgress,
  Grid,
} from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";
import { TSearchEngine } from "./type";
import { MenuItemLoading, MuiSelect } from "./style";

interface Props {
  loading: boolean;
  searchEngine: {
    value: TSearchEngine;
    favicon: (_: TSearchEngine) => React.ReactNode;
  };
  onChangeSearchEngine: (_: any) => void;
  onSearch: (_: string) => void;
}

const SearchBarPresenter = (props: Props) => {
  const onKeyUp = (event: any) => {
    if (event.key === "Enter") {
      props.onSearch(event.target.value);
    }
  };

  const StartAdornment = () => {
    const onChange = (event: any) => {
      props.onChangeSearchEngine(event.target.value);
    };

    const selectMenu = (text: TSearchEngine) => {
      if (props.loading)
        return (
          <MenuItem value={text}>
            <MenuItemLoading>
              <CircularProgress size={15} />
            </MenuItemLoading>
          </MenuItem>
        );

      return (
        <MenuItem value={text}>
          <Grid container spacing={1} wrap="nowrap" alignItems="flex-end">
            <Grid item>{props.searchEngine.favicon(text)}</Grid>
            <Grid item>{text.toUpperCase()}</Grid>
          </Grid>
        </MenuItem>
      );
    };

    return (
      <InputAdornment position="start">
        <MuiSelect
          id="search-select"
          labelId="search-select"
          value={props.searchEngine.value}
          onChange={onChange}
          disableUnderline
        >
          {selectMenu("naver")}
          {selectMenu("google")}
          {selectMenu("youtube")}
        </MuiSelect>
      </InputAdornment>
    );
  };

  const EndAdornment = () => (
    <InputAdornment position="end">
      <SearchRounded />
    </InputAdornment>
  );

  return (
    <TextField
      fullWidth
      placeholder="검색 또는 URL 입력"
      onKeyUp={onKeyUp}
      InputProps={{
        startAdornment: StartAdornment(),
        endAdornment: EndAdornment(),
      }}
    />
  );
};

export default SearchBarPresenter;
