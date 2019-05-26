import React from "react";
import PropTypes from "prop-types";

const Comment = ({ text }) => (
  <li className="todo-comment">
    <span className="comment">{text}</span>
  </li>
);

Comment.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  id: PropTypes.number
};

Comment.defaultProps = {
  text: "",
  isCompleted: false,
  removeTask: () => {},
  completeTask: () => {},
  id: 0
};

export default Comment;
