import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const Title = styled(Typography)`
  margin-top: 140px;
  margin-bottom: 80px;
  font-size: 105px;
  font-weight: bold;
  text-align: center;
  ${({ theme }) => `
    ${theme.breakpoints.down("xs")} {
      margin-top: 35px;
      margin-bottom: 40px;
      font-size: 40px;
      word-break: keep-all;
    }
  `}
`;
