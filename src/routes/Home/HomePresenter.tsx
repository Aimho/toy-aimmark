import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import styled from "styled-components";
import * as firebaseUtils from "../../utils/firebaseUtils";

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
  const { enqueueSnackbar } = useSnackbar();

  const getToken = async () => {
    const messagingToken = await firebaseUtils.getMessagingToken();
    if (messagingToken) {
      enqueueSnackbar(`token: ${messagingToken}`, { variant: "info" });
    }
  };

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <HomeContainer>
      <h1>홈</h1>
    </HomeContainer>
  );
}

export default Home;
