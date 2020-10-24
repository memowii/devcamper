import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.min.css';
import "./styles/index.css";
import { App } from "./app/App";

import reducers from "./redux/reducers";

const store = createStore(reducers, {});

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
