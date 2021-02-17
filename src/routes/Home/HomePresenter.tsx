import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Fade,
  Grid,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { IBookmarkInput } from "../Detail/type";
import { CardButton } from "../../styles/customStyles";
import { Title } from "./style";

interface Props {
  isIn: boolean;
  onSignIn: () => void;
  onStart: (item: IBookmarkInput) => void;
}

function HomePresenter({ isIn, onSignIn, onStart }: Props) {
  const [selected, setSelected] = useState(-1);
  const firstItems = [
    { name: "네이버", url: "https://www.naver.com/" },
    { name: "구글", url: "https://www.google.com/" },
    { name: "유투브", url: "https://www.youtube.com/" },
  ];
  const disabledItem = (index: number) => {
    if (selected === -1) return false;
    return selected !== index ? true : false;
  };
  const onClickItem = (item: IBookmarkInput, index: number) => {
    onStart(item);
    setSelected(index);
  };

  return (
    <React.Fragment>
      <Fade in={isIn}>
        <Container component="header" style={{ margin: "12px auto" }}>
          <Grid container justify="flex-end">
            <Grid item>
              <Button variant="text" onClick={onSignIn}>
                <p>이미 북마크가 있다면?</p>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Fade>

      <Fade in={isIn}>
        <Container component="main" style={{ margin: "48px auto" }}>
          <Title>내 북마크를 만들어보세요</Title>
          <Grid container justify="space-between" spacing={3}>
            {firstItems.map((item, index) => (
              <Grid item key={index}>
                <CardButton
                  disabled={disabledItem(index)}
                  onClick={() => onClickItem(item, index)}
                >
                  <p>{item.name}</p>

                  {selected === index ? (
                    <CircularProgress size={75} color="primary" />
                  ) : (
                    <Add color="primary" fontSize="inherit" />
                  )}
                </CardButton>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Fade>
    </React.Fragment>
  );
}

export default HomePresenter;
