import styled from "styled-components";
import colorSet from "../../styles/colorSet";

export const StyledHome = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 0px;
`;

export const StyledHomeHeader = styled.section`
  margin-bottom: 48px;
`;

export const StyledHomeContent = styled.section`
  padding: 24px 32px;
  border-radius: 4px;
  border: solid 1px ${colorSet.backgroundBase};
`;
