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

const morphismStyle = css`
  cursor: pointer;
  background: ${colorSet.primaryLight};
  box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5),
    3px 3px 5px rgba(170, 170, 204, 0.25), 5px 5px 10px rgba(170, 170, 204, 0.5),
    -5px -5px 10px #ffffff;
  border-radius: 32px;
  &:enabled:hover {
    background: ${colorSet.primaryDark};
  }
  &.active,
  &:active {
    background: ${colorSet.primaryDark};
    box-shadow: inset -1px -1px 2px rgba(255, 255, 255, 0.5),
      inset 1px 1px 2px rgba(170, 170, 204, 0.25),
      inset 3px 3px 5px rgba(170, 170, 204, 0.5), inset -3px -3px 5px #ffffff;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const CardButton = styled.button`
  ${morphismStyle}

  min-width: 250px;
  padding: 32px 24px;
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  p {
    margin-bottom: 24px;
  }
`;

export const ContainedButton = styled.button`
  ${morphismStyle}
  border-radius: 40px;

  padding: 8px 12px;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
`;
