import firebase from "firebase/app";
import React from "react";
import ReactDOM from "react-dom";

import App from "./component/App";
import config from "./config";

firebase.initializeApp(config.firebase);

ReactDOM.render(<App />, document.getElementById("root"));
