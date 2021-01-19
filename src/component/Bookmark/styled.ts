import { IconButton } from "@material-ui/core";
import styled from "styled-components";
import colorSet from "../../styles/colorSet";

export const MuiIconButton = styled(IconButton)`
  background-color: ${colorSet.gray000};
  &::hover {
    background-color: ${colorSet.backgroundDark};
  }
`;
