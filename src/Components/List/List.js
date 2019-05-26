import React from "react";
import PropTypes from "prop-types";

import { Item } from "../Item";

const List = ({ tasksList, removeTask, completeTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <Item
        key={id}
        id={id}
        text={text}
        isCompleted={isCompleted}
        removeTask={removeTask}
        completeTask={completeTask}
      />
    ))}
  </ul>
);

List.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func
};

List.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  completeTask: () => {}
};

export default List;
