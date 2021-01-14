import "firebase/auth";
import React from "react";
import firebase from "firebase/app";

import LoginButtonsPresenter from "./LoginButtonsPresenter";

const LoginButtonsContainer = () => {
  const onSignInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((resp) => console.log(resp))
      .catch(console.error);
  };

  return <LoginButtonsPresenter onSignInGoogle={onSignInGoogle} />;
};

export default LoginButtonsContainer;
