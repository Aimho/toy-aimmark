import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { Skeleton } from "@material-ui/lab";
import { MenuItem } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";

import { useUpdateUserMutation } from "../../generated/graphql";
import { initRender } from "../../recoils/renderState";
import { userSearchEngine, userProfile } from "../../recoils/userState";
import { MenuButton, MuiMenu } from "../../styles/customStyles";
import { TSearchEngine } from "./type";
import { transferSearchEngine } from "../../utils";

const DetailSearchEngine = () => {
  const [updateUser] = useUpdateUserMutation();

  const { id } = useRecoilValue(userProfile);
  const isInit = useRecoilValue(initRender);
  const [searchEngine, setSearchEngine] = useRecoilState(userSearchEngine);

  const [anchorEl, setAnchorEl]: any = useState(null);
  const menuClassName = Boolean(anchorEl) ? "active" : "";

  const onClickMenuButton = (e: React.MouseEvent) => {
    if (anchorEl) return setAnchorEl(null);
    return setAnchorEl(e.currentTarget);
  };

  const MenuIcon = () =>
    anchorEl ? (
      <ExpandLess color="inherit" fontSize="inherit" />
    ) : (
      <ExpandMore color="inherit" fontSize="inherit" />
    );

  const onChangeSearchEngine = async (search_engine: TSearchEngine) => {
    try {
      setSearchEngine(search_engine);
      await updateUser({
        variables: { id, search_engine },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const MenuItemButton = (label: TSearchEngine) => {
    const onClick = (e: React.MouseEvent) => {
      onClickMenuButton(e);
      onChangeSearchEngine(label);
    };
    return <MenuItem onClick={onClick}>{transferSearchEngine(label)}</MenuItem>;
  };

  return (
    <React.Fragment>
      <MenuButton
        className={menuClassName}
        onClick={onClickMenuButton}
        disableRipple
      >
        {!isInit ? (
          <Skeleton variant="text" width={48} height={36} animation="wave" />
        ) : (
          transferSearchEngine(searchEngine)
        )}
        <MenuIcon />
      </MenuButton>

      <MuiMenu
        elevation={0}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onClickMenuButton}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {MenuItemButton("naver")}
        {MenuItemButton("google")}
        {MenuItemButton("youtube")}
      </MuiMenu>
    </React.Fragment>
  );
};

export default DetailSearchEngine;
