import "firebase/auth";
import firebase from "firebase/app";

import { TSearchEngine } from "./component/SearchBar/type";

export const faviconImgProps = (baseUrl: string) => ({
  src: `https://www.google.com/s2/favicons?sz=64&domain_url=${baseUrl}`,
  onError: (e: any) => {
    if (e.target.src.indexOf("favicon.ico") === -1) {
      return (e.target.src = `${baseUrl}/favicon.ico`);
    } else {
      return (e.target.src = require(`./styles/images/baseline_link_black_36dp.png`));
    }
  },
  onLoadCapture: (e: any) => {
    if (e.target.offsetWidth === 16) {
      e.target.src = `${baseUrl}/favicon.ico`;
      e.target.classList.add("resize");
    } else {
      e.target.classList.add("resize");
    }
  },
  onLoad: (e: any) => {
    e.target.classList.add("visible");
  },
});

export const openUrl = (url: string) => window.open(url);

export const getBaseUrl = (url: string) => {
  return new URL(url).origin;
};

export const getSearchUrl = (search_engine: TSearchEngine) => {
  switch (search_engine) {
    case "google":
      return `https://www.google.com/search?q=`;
    case "naver":
      return `https://search.naver.com/search.naver?&query=`;
    // youtube
    default:
      return "https://www.youtube.com/results?search_query=";
  }
};

export const onSignInGoogle = async () => {
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
    const { id, email, picture } = profile as any;

    return {
      uid,
      profile: { id, email, photoUrl: picture },
      isNewUser,
    };
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
