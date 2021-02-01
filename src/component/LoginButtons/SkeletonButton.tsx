import React from "react";
import { Skeleton } from "@material-ui/lab";
import { Button, Fade } from "@material-ui/core";

const SkeletonButton = () => (
  <div>
    <Fade in>
      <Button
        disabled
        size="small"
        variant="text"
        startIcon={
          <Skeleton variant="circle" animation="wave" width={24} height={24} />
        }
      >
        <Skeleton variant="text" animation="wave" width={40} height={20} />
      </Button>
    </Fade>
  </div>
);

export default SkeletonButton;
