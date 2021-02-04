import React from "react";
import {
  InputAdornment,
  MenuItem,
  CircularProgress,
  Grid,
  TextField,
  IconButton,
} from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";

import { TSearchEngine } from "./type";
import { MenuItemLoading, MuiSelect } from "./style";
import { Skeleton } from "@material-ui/lab";

interface Props {
  loading: boolean;
  isAuthCheck: boolean;
  searchEngine: {
    value: TSearchEngine;
    favicon: (_: TSearchEngine) => React.ReactNode;
  };
  onChangeSearchEngine: (_: any) => void;
  searchText: string;
  onChangeSearchText: (_: string) => void;
  onSearch: () => void;
}

const SearchBarPresenter = (props: Props) => {
  const onKeyUp = (e: any) => {
    if (e.key === "Enter") {
      props.onSearch();
    }
  };

  const StartAdornment = () => {
    const onChange = (e: any) => {
      props.onChangeSearchEngine(e.target.value);
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

    if (!props.isAuthCheck) {
      return (
        <InputAdornment position="start">
          <Grid container spacing={1} wrap="nowrap" alignItems="center">
            <Grid item>
              <Skeleton
                variant="circle"
                animation="wave"
                width={12}
                height={12}
                style={{ marginTop: 2 }}
              />
            </Grid>
            <Grid item>
              <Skeleton
                variant="text"
                animation="wave"
                width={58}
                height={30}
              />
            </Grid>
          </Grid>
        </InputAdornment>
      );
    }

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
      <IconButton size="small" onClick={props.onSearch}>
        <SearchRounded />
      </IconButton>
    </InputAdornment>
  );

  const onChangeSearchText = (e: any) => {
    const text = e.target.value;
    props.onChangeSearchText(text);
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      onKeyUp={onKeyUp}
      placeholder="검색어 입력 후 엔터 또는 아이콘 클릭"
      value={props.searchText}
      onChange={onChangeSearchText}
      InputProps={{
        startAdornment: StartAdornment(),
        endAdornment: EndAdornment(),
      }}
    />
  );
};

export default SearchBarPresenter;
