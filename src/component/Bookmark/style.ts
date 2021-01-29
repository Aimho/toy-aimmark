import styled, { css } from "styled-components";
import { Avatar, CircularProgress, Paper } from "@material-ui/core";
import { CloseRounded, LockRounded } from "@material-ui/icons";
import colorSet from "../../styles/colorSet";

export const MuiAvatar = styled(Avatar)`
  img {
    background-color: ${colorSet.gray000};
  }
`;

const iconButtonPosition = css`
  top: 4px;
  right: 4px;
  position: absolute;
`;

export const MuiCircleProgress = styled(CircularProgress)`
  ${iconButtonPosition}

  color: ${colorSet.gray900};
`;

export const MuiClose = styled(CloseRounded)`
  ${iconButtonPosition}

  width: 16px;
  height: 16px;
  color: ${colorSet.gray600};

  &:hover {
    color: ${colorSet.gray900};
  }
`;

export const MuiPrivate = styled(LockRounded)`
  ${iconButtonPosition}
  right: none;
  left: 8px;

  width: 16px;
  height: 16px;
  color: ${colorSet.gray600};
`;

export const MuiPaper = styled(Paper)`
  display: flex;
  padding: 16px 24px;
  padding-bottom: 8px;
  position: relative;
  align-items: center;
  flex-direction: column;
  transition: background-color 0.3s;
  background-color: ${colorSet.backgroundLight};
  &:hover {
    background-color: ${colorSet.backgroundBase};
  }

  img {
    margin-bottom: 8px;
    &.resize {
      width: 32px;
      height: 32px;
    }
  }
`;
