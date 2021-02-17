import { ButtonBase, IconButton, Menu } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styled, { css } from "styled-components";
import colorSet from "./colorSet";

export const snackbarStyles = makeStyles(() => ({
  // Mui 스타일이 !important로 적용되어 있어
  // custom 스타일에 !important 추가하지 않으면 적용 되지 않음
  contentRoot: {
    color: `${colorSet.gray900} !important`,
    backgroundColor: `${colorSet.gray000} !important`,
  },
  variantSuccess: {
    color: `${colorSet.gray900} !important`,
    backgroundColor: `${colorSet.primaryLight} !important`,
  },
  variantError: {
    color: `${colorSet.gray900} !important`,
    backgroundColor: `${colorSet.errorLight} !important`,
  },
}));

const morphismDefault = css`
  cursor: pointer;
  background: ${colorSet.primaryLight};
  box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5),
    3px 3px 5px rgba(170, 170, 204, 0.25), 5px 5px 10px rgba(170, 170, 204, 0.2),
    -3px -3px 10px #ffffff;
  border-radius: 16px;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
const morphismActive = css`
  &:enabled:hover {
    background: ${colorSet.primaryBase};
  }
  &.active,
  &:enabled:active {
    background: ${colorSet.primaryDark};
    box-shadow: inset -1px -1px 2px rgba(255, 255, 255, 0.5),
      inset 1px 1px 2px rgba(170, 170, 204, 0.25),
      inset 3px 3px 5px rgba(170, 170, 204, 0.5), inset -3px -3px 5px #ffffff;
  }
`;

export const CardButton = styled(ButtonBase)`
  ${morphismDefault}
  ${morphismActive}

  min-width: 250px;
  padding: 32px 24px;
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  flex-direction: column;
  p {
    margin-bottom: 24px;
  }
`;

export const BookmarkButton = styled(CardButton)`
  width: 100%;
  min-width: 120px;
  min-height: 76px;
  padding: 18px 24px;
  position: relative;
  align-items: center;
  margin-bottom: 8px;

  img {
    opacity: 0.1;
    margin-bottom: 8px;
    max-width: 20px;
    max-height: 20px;
    transition: opacity 0.5s;
    &.resize {
      width: 20px;
      height: 20px;
      opacity: 1;
    }
  }

  p {
    font-size: 12px;
    font-weight: normal;
    margin-bottom: 0;
  }

  .close-button {
    opacity: 0;
  }
  &:hover .close-button {
    opacity: 1;
  }
`;

export const MenuButton = styled(ButtonBase)`
  ${morphismDefault}
  ${morphismActive}

  height: 40px;
  min-width: 104px;
  border-radius: 40px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: bolder;
  text-align: center;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
`;

export const MuiMenu = styled(Menu)`
  .MuiPaper-root {
    ${morphismDefault}
  }
  .MuiMenuItem-root {
    padding: 6px 24px;
    font-size: 16px;
  }
  .MuiListItem-button {
    ${morphismActive}
  }
  .MuiButtonBase-root {
    position: relative;
  }
  .MuiButtonBase-root + .MuiButtonBase-root {
    &::after {
      position: absolute;
      top: 0;
      left: 10%;
      content: "";
      width: 80%;
      height: 2px;
      background: rgba(170, 170, 204, 0.25);
      box-shadow: inset -1px -1px 1px rgba(255, 255, 255, 0.7),
        inset 1px 1px 2px rgba(174, 174, 192, 0.2);
      border-radius: 5px;
    }
  }
`;

export const MuiIconButton = styled(IconButton)`
  background: #f5f5fa;
  box-shadow: 5px 5px 10px rgba(170, 170, 204, 0.5), -5px -5px 10px #ffffff;
  border-radius: 50%;
  &:hover {
    background: #e5e5f0;
  }
`;
