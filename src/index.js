import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles/index.css";
import { App } from "./components/App";
import store from "./app/store";

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
