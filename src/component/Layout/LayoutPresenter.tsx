import React from "react";
import { Container } from "@material-ui/core";

import AppBar from "../AppBar";
import SearchBar from "../SearchBar";

import { LayoutWrapper } from "./style";

const LayoutPresenter: React.FC = ({ children }) => (
  <React.Fragment>
    <AppBar />

    <LayoutWrapper>
      <Container maxWidth="md" style={{ marginBottom: 48 }}>
        <SearchBar />
      </Container>

      {children}
    </LayoutWrapper>
  </React.Fragment>
);

export default LayoutPresenter;
