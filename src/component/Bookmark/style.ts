import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import colorSet from "../../styles/colorSet";

export const MuiAvatar = styled(Avatar)`
  img {
    background-color: ${colorSet.gray000};
  }
`;

export const MuiClose = styled(CloseRounded)`
  width: 16px;
  height: 16px;
  color: ${colorSet.gray600};
`;
