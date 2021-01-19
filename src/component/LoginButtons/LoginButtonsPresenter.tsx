import React from "react";
import { Button } from "@material-ui/core";

import { Google } from "../../Icon";

interface Props {
  onSignInGoogle: () => void;
}

const LoginButtonsPresenter = (props: Props) => (
  <div>
    <Button
      fullWidth
      size="small"
      variant="text"
      color="secondary"
      onClick={props.onSignInGoogle}
      startIcon={<Google />}
    >
      로그인
    </Button>
  </div>
);

export default LoginButtonsPresenter;
