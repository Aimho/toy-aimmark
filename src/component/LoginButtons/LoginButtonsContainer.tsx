import "firebase/auth";
import React from "react";
import firebase from "firebase/app";

import { useSetRecoilState } from "recoil";
import { userId, userEmail, userSearchEngine } from "../../recoils/userState";

import LoginButtonsPresenter from "./LoginButtonsPresenter";
import {
  useGetUserLazyQuery,
  useInsertUserMutation,
} from "../../generated/graphql";
import Loading from "../Loading";
import LogoutButtonPresenter from "./LogoutButtonPresenter";
import { TSearchEngine } from "../SearchBar/type";

const LoginButtonsContainer = () => {
  const [insertUser] = useInsertUserMutation();
  const [getUser, { data, loading }] = useGetUserLazyQuery();
  const setUser = {
    id: useSetRecoilState(userId),
    email: useSetRecoilState(userEmail),
    searchEngine: useSetRecoilState(userSearchEngine),
  };

  const userByPk = data?.user_by_pk;
  const id = userByPk?.id;

  React.useEffect(() => {
    if (!userByPk) return;

    const email = userByPk.email;
    const search_engine = userByPk.search_engine
      ? (userByPk.search_engine as TSearchEngine)
      : "google";
    if (id && email) {
      setUser.id(id);
      setUser.email(email);
      setUser.searchEngine(search_engine);
    }
  }, [id, setUser, userByPk]);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      const uid = user?.uid;
      if (uid) {
        getUser({
          variables: { uid },
        });
      }
    });
  }, [getUser]);

  const onSignInGoogle = async () => {
    // provider is google
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const firebaseAuth = await firebase.auth().signInWithPopup(provider);
      if (!firebaseAuth.additionalUserInfo) {
        // eslint-disable-next-line
        throw "firebase additionalUserInfo is null";
      }

      // firebase data extract
      const { profile, isNewUser } = firebaseAuth.additionalUserInfo;
      const { uid } = firebaseAuth.user!;
      const { id, email } = profile as any;

      if (isNewUser) {
        // singUp user
        await insertUser({
          variables: { id, uid, email },
        });
      }

      // signIn user
      getUser({
        variables: { uid },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onSignOut = async () => {
    getUser({ variables: { uid: "" } });
    setUser.id("");
    setUser.email("");
    await firebase.auth().signOut();
  };

  return (
    <React.Fragment>
      <Loading open={loading} />
      {id ? (
        <LogoutButtonPresenter onSignOut={onSignOut} />
      ) : (
        <LoginButtonsPresenter onSignInGoogle={onSignInGoogle} />
      )}
    </React.Fragment>
  );
};

export default LoginButtonsContainer;
