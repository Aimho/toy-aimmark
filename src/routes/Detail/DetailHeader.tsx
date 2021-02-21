import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSetRecoilState } from "recoil";

import { Skeleton } from "@material-ui/lab";
import { FileCopy } from "@material-ui/icons";
import { Avatar, Button, Container, Grid } from "@material-ui/core";

import { onSignInGoogle } from "../../utils";
import { userProfile } from "../../recoils/userState";
import {
  useGetUserPhotoUrlQuery,
  useGetUserLazyQuery,
} from "../../generated/graphql";

interface Props {
  ownerId: string;
}

const DetailHeader = ({ ownerId }: Props) => {
  const { enqueueSnackbar } = useSnackbar();
  const [getUser, userState] = useGetUserLazyQuery();
  const userByPk = userState.data?.user_by_pk;
  const setProfile = useSetRecoilState(userProfile);
  useEffect(() => {
    if (!userByPk || userByPk.__typename !== "user") return;

    const { id, email, photoUrl } = userByPk;
    setProfile({ id, email, photoUrl });
  }, [userByPk, setProfile]);

  const onSignIn = async () => {
    try {
      const googleResult = await onSignInGoogle();
      if (!googleResult) {
        // eslint-disable-next-line
        throw "onSignInGoogle fail";
      }

      // firebase data extract
      const { uid } = googleResult;
      getUser({ variables: { uid } });
    } catch (error) {
      console.error(error);
    }
  };

  const { href } = window.location;
  const onCopy = () => {
    enqueueSnackbar(`북마크 주소가 복사되었습니다.`, {
      variant: "info",
    });
  };

  const { data } = useGetUserPhotoUrlQuery({
    variables: { id: ownerId },
  });

  const Profile = () => {
    const photoUrl = data?.user[0].photoUrl;
    if (!photoUrl) {
      return (
        <Skeleton variant="circle" width={40} height={40} animation="wave" />
      );
    }
    return (
      <Avatar
        alt={"profile"}
        src={photoUrl}
        onClick={onSignIn}
        style={{ cursor: "pointer" }}
      />
    );
  };

  return (
    <Container component="header" maxWidth="md" style={{ margin: "12px auto" }}>
      <Grid container justify="space-between">
        <Grid item>
          <Profile />
        </Grid>
        <Grid item>
          <CopyToClipboard text={href} onCopy={onCopy}>
            <Button
              variant="text"
              startIcon={<FileCopy />}
              style={{ fontWeight: "bolder" }}
            >
              북마크 공유
            </Button>
          </CopyToClipboard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailHeader;
