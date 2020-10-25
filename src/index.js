import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.min.css";

import "./styles/index.css";
import { App } from "./app/App";
import store from "./app/store";

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
