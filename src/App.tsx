/**
 * 참고
 * React.StrictMode https://ko.reactjs.org/docs/strict-mode.html
 */

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./component/Header";
import PageContainer from "./page";

import "./assets/reset.css";

function App() {
  return (
    <BrowserRouter>
      <h1>menus</h1>
      <Header />

      <hr />

      <React.StrictMode>
        <PageContainer />
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
