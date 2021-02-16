import React from "react";
import { useSnackbar } from "notistack";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Avatar, Button, Container, Grid } from "@material-ui/core";
import { FileCopy } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";

import { useGetUserPhotoUrlQuery } from "../../generated/graphql";

interface Props {
  userId: string;
}

const DetailHeader = ({ userId }: Props) => {
  const { enqueueSnackbar } = useSnackbar();

  const { href } = window.location;
  const onCopy = () => {
    enqueueSnackbar(`북마크 주소가 복사되었습니다.`, {
      variant: "info",
    });
  };

  const { data } = useGetUserPhotoUrlQuery({
    variables: { id: userId },
  });

  const Profile = () => {
    const photoUrl = data?.user[0].photoUrl;
    if (!photoUrl) {
      return (
        <Skeleton variant="circle" width={40} height={40} animation="wave" />
      );
    }
    return <Avatar alt={"profile"} src={photoUrl} />;
  };

  return (
    <Container component="header" style={{ margin: "12px auto" }}>
      <Grid container justify="space-between">
        <Grid item>
          <Profile />
        </Grid>
        <Grid item>
          <CopyToClipboard text={href} onCopy={onCopy}>
            <Button variant="text" startIcon={<FileCopy />}>
              북마크 공유
            </Button>
          </CopyToClipboard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailHeader;
