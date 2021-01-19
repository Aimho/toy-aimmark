import React from "react";
import styled from "styled-components";

const StyledGoogle = styled.svg`
  width: 15px;
  height: 15px;
`;

const Google = () => (
  <StyledGoogle className="MuiSvgIcon-root" viewBox="0 0 15 15" fill="#fff">
    <path d="M 7.28571 6.4125L 7.28571 9L 11.3929 9C 11.2143 10.0875 10.1429 12.225 7.28571 12.225C 4.78571 12.225 2.78571 10.0875 2.78571 7.5C 2.78571 4.9125 4.82143 2.775 7.28571 2.775C 8.71429 2.775 9.64286 3.4125 10.1786 3.9375L 12.1429 1.9875C 10.8929 0.75 9.25 0 7.28571 0C 3.25 0 0 3.3375 0 7.5C 0 11.6625 3.25 15 7.28571 15C 11.5 15 14.25 11.9625 14.25 7.6875C 14.25 7.2 14.2143 6.825 14.1429 6.45L 7.28571 6.45L 7.28571 6.4125Z"></path>
  </StyledGoogle>
);

export default Google;
