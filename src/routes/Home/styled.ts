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

export const StyledHomeContents = styled.section`
  background-color: ${colorSet.backgroundLight};
  min-height: 70vh;
  padding: 12px 24px;
  border-radius: 4px;
`;
