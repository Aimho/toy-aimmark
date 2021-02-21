import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { initRender } from "../../recoils/renderState";
import { userProfile, userSearchEngine } from "../../recoils/userState";

import {
  useGetUserLazyQuery,
  useInsertUserMutation,
  useInsertItemMutation,
} from "../../generated/graphql";

import { onSignInGoogle } from "../../utils";
import { TSearchEngine, IBookmarkInput } from "../Detail/type";
import HomePresenter from "./HomePresenter";

function Home() {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const [insertItem] = useInsertItemMutation();
  const [insertUser] = useInsertUserMutation();
  const [getUser, { data }] = useGetUserLazyQuery();

  const isInit = useRecoilValue(initRender);
  const { id } = useRecoilValue(userProfile);
  const setProfile = useSetRecoilState(userProfile);
  const setSearchEngine = useSetRecoilState(userSearchEngine);

  const userByPk = data?.user_by_pk;
  useEffect(() => {
    if (!userByPk || userByPk.__typename !== "user") return;

    const { id, email, photoUrl, search_engine = "google" } = userByPk;
    setProfile({ id, email, photoUrl });
    setSearchEngine(search_engine as TSearchEngine);
    history.replace(`/${id}`);
  }, [history, userByPk, setProfile, setSearchEngine]);

  const onSignIn = async () => {
    try {
      const googleResult = await onSignInGoogle();
      if (!googleResult) {
        // eslint-disable-next-line
        throw "onSignInGoogle fail";
      }

      // firebase data extract
      const { uid, profile, isNewUser } = googleResult;

      if (isNewUser) {
        const insertUserResult = await insertUser({
          variables: { uid, ...profile },
        });

        const {
          id,
          email,
          photoUrl,
          search_engine,
        } = insertUserResult.data?.insert_user_one!;

        setProfile({ id, email, photoUrl });
        setSearchEngine(search_engine as TSearchEngine);
        return id;
      } else {
        getUser({ variables: { uid } });
        return "";
      }
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  const onStart = async (item: IBookmarkInput) => {
    enqueueSnackbar(`구글계정으로 로그인하면 첫 북마크가 생겨요!`, {
      variant: "info",
    });

    const base_url = new URL(item.url).origin;

    try {
      let userId = id;
      if (!userId) {
        userId = await onSignIn();
      }

      if (!userId) return { error: true };
      await insertItem({
        variables: {
          url: item.url,
          name: item.name,
          base_url,
          user_id: userId,
        },
      });
      history.replace(`/${userId}`);
      return { error: false };
    } catch (error) {
      return { error: true };
    }
  };

  return <HomePresenter isIn={isInit} onSignIn={onSignIn} onStart={onStart} />;
}

export default Home;
