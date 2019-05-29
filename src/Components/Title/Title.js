import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const Title = ({ title }) => (
  <h2 className="title">
    <FormattedMessage id={title} defaultMessage="Title default" />
  </h2>
);

Title.propTypes = {
  title: PropTypes.string
};

Title.defaultProps = {
  title: "Simple title"
};

export default Title;
