import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import colorSet from "../../styles/colorSet";

export const MuiAvatar = styled(Avatar)`
  img {
    background-color: ${colorSet.gray000};
  }
`;
