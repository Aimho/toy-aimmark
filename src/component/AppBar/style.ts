import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useAppBarStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      display: "block",
    },
  })
);
