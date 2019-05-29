import React, { Component, Fragment } from "react";
import "./App.scss";
import Title from "./Title/Title";
import ToDo from "../Containers/ToDo";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import messages from "../messages";

class App extends Component {
  render() {
    const { lang } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <Fragment>
          <Title title="title" />
          <ToDo />
        </Fragment>
      </IntlProvider>
    );
  }
}

const mapStateToProps = ({ lang }) => ({
  lang
});

export default connect(
  mapStateToProps,
  null
)(App);
