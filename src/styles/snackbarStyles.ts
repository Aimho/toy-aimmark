import { makeStyles } from "@material-ui/styles";
import colorSet from "./colorSet";

const snackbarStyles = makeStyles(() => ({
  // Mui 스타일이 !important로 적용되어 있어
  // custom 스타일에 !important 추가하지 않으면 적용 되지 않음
  contentRoot: {
    color: `${colorSet.gray900} !important`,
    backgroundColor: `${colorSet.gray000} !important`,
  },
  variantSuccess: {
    color: `${colorSet.gray900} !important`,
    backgroundColor: `${colorSet.primaryLight} !important`,
  },
  variantError: {
    color: `${colorSet.gray900} !important`,
    backgroundColor: `${colorSet.errorLight} !important`,
  },
}));

export default snackbarStyles;
