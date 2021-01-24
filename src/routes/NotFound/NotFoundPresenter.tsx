import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Main } from "./style";
import imgError from "./error.png";

const NotFoundPresenter: React.FC = () => (
  <Main>
    <p className="title">Ooops!</p>
    <p className="description">요청하신 페이지가 존재하지 않습니다.</p>
    <img src={imgError} alt="error" />
    <Link to="/">
      <Button color="inherit" variant="text" size="large">
        홈으로 돌아가기
      </Button>
    </Link>
  </Main>
);

export default NotFoundPresenter;
