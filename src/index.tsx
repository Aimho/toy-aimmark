import "core-js";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import firebase from "firebase/app";
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./component/App";
import config from "./config";
import client from "./apollo";

firebase.initializeApp(config.firebase);

ReactDOM.render(
  <ApolloProvider client={client as any}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
