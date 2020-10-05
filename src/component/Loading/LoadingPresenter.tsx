import React from 'react';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.primary.main
  }
}));

interface Props {
  open: boolean;
}

const LoadingPresenter: React.FC<Props> = ({ open }) => {
  const { backdrop } = useStyles();
  return (
    <Backdrop className={backdrop} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingPresenter;
