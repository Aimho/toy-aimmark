import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import "firebase/auth";
import firebase from "firebase/app";

import { useGetUserLazyQuery } from "../../generated/graphql";
import { userProfile, userSearchEngine } from "../../recoils/userState";
import { initRender } from "../../recoils/renderState";
import { TSearchEngine } from "../../routes/Detail/type";
import AppPresenter from "./AppPresenter";
import LoadingLine from "../LoadingLine";

const AppContainer = () => {
  const setRender = useSetRecoilState(initRender);
  const setProfile = useSetRecoilState(userProfile);
  const setSearchEngine = useSetRecoilState(userSearchEngine);

  const [getUser, { data }] = useGetUserLazyQuery();

  // firebase google login check
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      const uid = user?.uid;
      if (uid) return getUser({ variables: { uid } });
      setTimeout(() => setRender(true), 200);
    });
  }, [getUser, setRender]);

  // update recoil user state
  const userByPk = data?.user_by_pk;
  useEffect(() => {
    if (!userByPk || userByPk.__typename !== "user") return;

    const { id, email, photoUrl, search_engine = "google" } = userByPk;
    setProfile({ id, email, photoUrl });
    setSearchEngine(search_engine as TSearchEngine);
    setTimeout(() => setRender(true), 100);
  }, [userByPk, setProfile, setSearchEngine, setRender]);

  return (
    <React.Fragment>
      <LoadingLine />
      <AppPresenter />
    </React.Fragment>
  );
};

export default AppContainer;
