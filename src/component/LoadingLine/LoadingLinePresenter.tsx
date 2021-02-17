import React from "react";
import { useRecoilValue } from "recoil";
import { Fade, LinearProgress } from "@material-ui/core";

import { initRender } from "../../recoils/renderState";

const LoadingLinePresenter = () => {
  const isInit = useRecoilValue(initRender);
  return (
    <Fade in={!isInit}>
      <LinearProgress />
    </Fade>
  );
};

export default LoadingLinePresenter;
