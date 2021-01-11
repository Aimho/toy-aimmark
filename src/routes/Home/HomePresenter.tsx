import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  color: #fff;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <HomeContainer>
      <h1>홈</h1>
    </HomeContainer>
  );
}

export default Home;
