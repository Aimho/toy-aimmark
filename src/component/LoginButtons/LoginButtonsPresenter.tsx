import React from "react";
import { Button, CircularProgress, Fade } from "@material-ui/core";
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
        startIcon={
          props.loading ? (
            <CircularProgress size={15} />
          ) : (
            <img
              alt="google"
              src="https://www.google.com/s2/favicons?sz=24&domain_url=https://sites.google.com"
            />
          )
        }
        disabled={props.loading}
      >
        로그인
      </Button>
    </Fade>
  </div>
);

export default LoginButtonsPresenter;
