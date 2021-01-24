import styled from "styled-components";
import colorSet from "../../styles/colorSet";

export const StyledDetail = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 0px;
`;

export const StyledDetailHeader = styled.section`
  margin-bottom: 48px;
`;

export const StyledDetailContents = styled.section`
  background-color: ${colorSet.backgroundLight};
  min-height: 70vh;
  padding: 12px 24px;
  border-radius: 4px;
`;
