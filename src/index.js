import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import App from "./App";
import storeConfig from "./store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = storeConfig();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
