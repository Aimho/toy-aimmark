import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Grid,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { useRecoilValue } from "recoil";
import { userProfile } from "../../recoils/userState";
import { useInsertItemMutation } from "../../generated/graphql";
import { MuiIconButton } from "../../styles/customStyles";

interface Props {
  onCloseCallBack: () => void;
}

const DetailBookmarkAddDialog = ({ onCloseCallBack }: Props) => {
  const { id } = useRecoilValue(userProfile);
  const [insertItem] = useInsertItemMutation();

  const { register, handleSubmit, errors } = useForm();
  const { url, name } = errors;

  const [open, setOpen] = useState(false);
  const onOpenDialog = () => setOpen(true);
  const onCloseDialog = () => setOpen(false);
  const [disabled, setDisabled] = useState(false);

  const onSubmit = async (data: any) => {
    setDisabled(true);
    const { url, name } = data;
    if (!id) {
      console.error("user id is null");
      return;
    }

    const base_url = new URL(url).origin;

    insertItem({
      variables: { url, base_url, name, user_id: id },
    }).then(() => {
      onCloseDialog();
      onCloseCallBack();
      setDisabled(false);
    });
  };

  return (
    <React.Fragment>
      <MuiIconButton onClick={onOpenDialog} style={{ marginTop: 24 }}>
        <Add />
      </MuiIconButton>

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
                  placeholder="https://~~~"
                  helperText={url?.message}
                  inputProps={{
                    ref: register({
                      required: { value: true, message: "url을 입력해주세요" },
                      pattern: {
                        // eslint-disable-next-line
                        value: /^http[s]?\:\/\//i,
                        message: "https를 포함한 url을 입력해주세요",
                      },
                    }),
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              variant="text"
              color="secondary"
              onClick={onCloseDialog}
              disabled={disabled}
            >
              취소
            </Button>
            <Button
              variant="text"
              color="primary"
              type="submit"
              disabled={disabled}
            >
              추가
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default DetailBookmarkAddDialog;
