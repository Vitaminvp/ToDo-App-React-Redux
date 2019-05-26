import React, { Fragment } from "react";
import "./App.scss";
import Title from "./Title/Title";
import ToDo from "../Containers/ToDo";

const App = () => (
  <Fragment>
    <Title title="SOme title" />
    <ToDo />
  </Fragment>
);

export default App;
