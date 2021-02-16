import styled from "styled-components";
import { IconButton, TextField } from "@material-ui/core";

export const SearchInput = styled(TextField)`
  padding-left: 16px;
  background: #f5f5fa;
  box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(170, 170, 204, 0.25),
    inset 5px 5px 10px rgba(170, 170, 204, 0.5), inset -5px -5px 10px #ffffff;
  border-radius: 40px;
  &:focus,
  &:active,
  &:hover {
    background: #e5e5f0;
  }
  input {
    color: #7878ab;
  }
  fieldset {
    border: 0px;
  }
`;

export const SearchIcon = styled(IconButton)`
  background: #f5f5fa;
  box-shadow: 5px 5px 10px rgba(170, 170, 204, 0.5), -5px -5px 10px #ffffff;
  border-radius: 50%;
  &:hover {
    background: #e5e5f0;
  }
`;
