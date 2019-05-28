import React from "react";
import PropTypes from "prop-types";

import { Item } from "../Item";

const List = ({
  tasksList,
  removeTask,
  completeTask,
  selectTask,
  currentTaskId
}) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted, comments }) => {
      const commentsAmount = comments.length;
      return <Item
          currentTaskId={currentTaskId}
          key={id}
          id={id}
          text={text}
          isCompleted={isCompleted}
          removeTask={removeTask}
          completeTask={completeTask}
          selectTask={selectTask}
          commentsAmount={commentsAmount}
      />
    })}
  </ul>
);

List.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  currentTaskId: PropTypes.number
};

List.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  completeTask: () => {},
  currentTaskId: null
};

export default List;
