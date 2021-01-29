import { Select } from "@material-ui/core";
import styled from "styled-components";

export const MenuItemLoading = styled.div`
  min-width: 70px;
  padding: 0px 8px;
  text-align: center;
`;

export const SearchEngineFavicon = styled.img`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

export const MuiSelect = styled(Select)`
  .MuiSelect-select:focus {
    background-color: transparent;
  }
`;
