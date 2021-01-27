import React from "react";
import { Button, CircularProgress, Fade } from "@material-ui/core";

import { Google } from "../../Icon";

interface Props {
  loading: boolean;
  onSignInGoogle: () => void;
}

const LoginButtonsPresenter = (props: Props) => (
  <div>
    <Fade in>
      <Button
        fullWidth
        size="small"
        variant="text"
        color="secondary"
        onClick={props.onSignInGoogle}
        startIcon={props.loading ? <CircularProgress size={15} /> : <Google />}
        disabled={props.loading}
      >
        로그인
      </Button>
    </Fade>
  </div>
);

export default LoginButtonsPresenter;
