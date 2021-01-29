import React from "react";
import {
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  CircularProgress,
} from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";
import { TSearchEngine } from "./type";
import { MenuItemLoading } from "./style";

interface Props {
  loading: boolean;
  searchEngine: TSearchEngine;
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

    const selectMenu = (text: string) => {
      const MenuContent = props.loading ? (
        <MenuItemLoading>
          <CircularProgress size={15} />
        </MenuItemLoading>
      ) : (
        text.toUpperCase()
      );

      return <MenuItem value={text}>{MenuContent}</MenuItem>;
    };

    return (
      <InputAdornment position="start">
        <Select
          id="search-select"
          labelId="search-select"
          value={props.searchEngine}
          onChange={onChange}
          disableUnderline
        >
          {selectMenu("naver")}
          {selectMenu("google")}
          {selectMenu("youtube")}
        </Select>
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
