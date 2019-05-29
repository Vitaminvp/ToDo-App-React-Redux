import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";
import "./index.scss";
import App from "./Components/App";
import { Provider } from "react-redux";
import store from "./store";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";
import uk from "react-intl/locale-data/uk";

addLocaleData(en);
addLocaleData(ru);
addLocaleData(uk);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
