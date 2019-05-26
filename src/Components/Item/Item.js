import React from "react";
import PropTypes from "prop-types";

const Item = ({
  text,
  isCompleted,
  id,
  removeTask,
  completeTask,
  selectTask
}) => (
  <li className="todo-item">
    <i className="material-icons" onClick={() => completeTask(id)}>
      {isCompleted ? "check_circle" : "brightness_1"}
    </i>
    <span
      className={isCompleted ? "completed text" : "text"}
      onClick={() => selectTask(id)}
    >
      {text}
    </span>
    <i className="material-icons" onClick={() => removeTask(id)}>
      clear
    </i>
  </li>
);

Item.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  id: PropTypes.number
};

Item.defaultProps = {
  text: "",
  isCompleted: false,
  removeTask: () => {},
  completeTask: () => {},
  id: 0
};

export default Item;
