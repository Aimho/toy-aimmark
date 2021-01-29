import React from "react";
import { useForm } from "react-hook-form";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  IconButton,
  Grid,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { Bookmark } from "@material-ui/icons";

import { useRecoilValue } from "recoil";
import { userState } from "../../recoils/userState";
import { useInsertItemMutation } from "../../generated/graphql";

interface Props {
  onCloseCallBack: () => void;
}

const BookmarkDialog = ({ onCloseCallBack }: Props) => {
  const { id } = useRecoilValue(userState);
  const [insertItem] = useInsertItemMutation();

  const { register, handleSubmit, errors } = useForm();
  const { url, name } = errors;

  const [open, setOpen] = React.useState(false);
  const onOpenDialog = () => setOpen(true);
  const onCloseDialog = () => setOpen(false);

  const onSubmit = async (data: any) => {
    const { url, name, is_private } = data;
    if (!id) {
      console.error("user id is null");
      return;
    }

    const base_url = new URL(url).origin;

    insertItem({
      variables: { url, base_url, name, user_id: id, is_private },
    }).then(() => {
      onCloseDialog();
      onCloseCallBack();
    });
  };

  return (
    <React.Fragment>
      <IconButton onClick={onOpenDialog} color="primary">
        <Bookmark />
      </IconButton>

      <Dialog open={open} maxWidth="xs" fullWidth>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Grid container spacing={2} justify="flex-end">
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  error={name ? true : false}
                  helperText={name?.message}
                  inputProps={{
                    ref: register({
                      required: { value: true, message: "이름 입력해주세요" },
                    }),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="url"
                  label="URL"
                  error={url ? true : false}
                  helperText={url?.message}
                  inputProps={{
                    ref: register({
                      required: { value: true, message: "url을 입력해주세요" },
                      pattern: {
                        // eslint-disable-next-line
                        value: /^http[s]?\:\/\//i,
                        message: "올바른 url을 입력해주세요",
                      },
                    }),
                  }}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  label="비공개"
                  labelPlacement="start"
                  control={
                    <Switch
                      defaultChecked={false}
                      name="is_private"
                      color="primary"
                      inputRef={register()}
                    />
                  }
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button variant="text" onClick={onCloseDialog}>
              취소
            </Button>
            <Button variant="text" color="primary" type="submit">
              추가
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default BookmarkDialog;
