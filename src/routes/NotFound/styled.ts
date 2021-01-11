import styled from 'styled-components';
import colorSet from '../../styles/colorSet';

export const Main = styled.main`
  padding: 200px 15px;
  padding-bottom: 0px;
  min-height: calc(100vh - 70px);
  background-color: ${colorSet.backgroundLight};
  color: ${colorSet.gray900};
  text-align: center;
  ${({ theme }) => `
    ${theme.breakpoints.down('xs')} {
      min-height: calc(100vh - 44px);
    }
  `}
  .title {
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 4px;
  }
  .description {
    font-size: 14px;
    line-height: 20px;
  }
  img {
    display: block;
    width: 100%;
    max-width: 720px;
    margin: 20px auto;
    margin-bottom: 60px;
  }
`;
