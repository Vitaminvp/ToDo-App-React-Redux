import React from "react";
import PropTypes from "prop-types";

const Input = ({ value, onChange, onKeyPress }) => (
  <div className="todo-input-wrapper">
    <i className="material-icons">add</i>
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
  </div>
);

Input.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string
};

Input.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: ""
};

export default Input;
