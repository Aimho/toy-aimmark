import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import "firebase/auth";
import firebase from "firebase/app";

import { useGetUserLazyQuery } from "../../generated/graphql";
import { userId, userEmail, userSearchEngine } from "../../recoils/userState";
import { renderAuthCheck } from "../../recoils/renderState";

import { TSearchEngine } from "../SearchBar/type";
import LayoutPresenter from "./LayoutPresenter";

const Layout: React.FC = ({ children }) => {
  const setUser = {
    id: useSetRecoilState(userId),
    email: useSetRecoilState(userEmail),
    searchEngine: useSetRecoilState(userSearchEngine),
  };
  const setAuthCheck = useSetRecoilState(renderAuthCheck);
  const [getUser, { data }] = useGetUserLazyQuery();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      const uid = user?.uid;
      if (uid) {
        getUser({ variables: { uid } });
        return;
      } else {
        setTimeout(() => setAuthCheck(true), 200);
      }
    });
  }, [getUser, setAuthCheck]);

  const userByPk = data?.user_by_pk;
  const id = userByPk?.id;

  useEffect(() => {
    if (!userByPk) return;

    const email = userByPk.email;
    const search_engine = userByPk.search_engine
      ? (userByPk.search_engine as TSearchEngine)
      : "google";
    if (id && email) {
      setUser.id(id);
      setUser.email(email);
      setUser.searchEngine(search_engine);
      setTimeout(() => setAuthCheck(true), 100);
    }
  }, [id, setUser, userByPk, setAuthCheck]);

  return <LayoutPresenter>{children}</LayoutPresenter>;
};

export default Layout;
