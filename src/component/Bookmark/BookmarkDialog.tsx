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
} from "@material-ui/core";
import { Bookmark } from "@material-ui/icons";

import { useRecoilValue } from "recoil";
import { userState } from "../../recoils/userState";
import { useInsertItemMutation } from "../../generated/graphql";

const BookmarkDialog = () => {
  const { id } = useRecoilValue(userState);
  const [insertItem] = useInsertItemMutation();

  const { register, handleSubmit, errors } = useForm();
  const { url, name } = errors;

  const [open, setOpen] = React.useState(false);
  const onOpenDialog = () => setOpen(true);
  const onCloseDialog = () => setOpen(false);

  const onSubmit = async (data: any) => {
    const { url, name } = data;
    if (!id) {
      console.error("user id is null");
      return;
    }
    insertItem({
      variables: { user_id: id, url, name },
    });
    onCloseDialog();
  };

  return (
    <React.Fragment>
      <IconButton onClick={onOpenDialog}>
        <Bookmark />
      </IconButton>

      <Dialog open={open} maxWidth="xs" fullWidth>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Grid container spacing={2}>
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
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCloseDialog}>취소</Button>
            <Button type="submit">추가</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default BookmarkDialog;
