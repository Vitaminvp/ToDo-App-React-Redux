import React from "react";
import PropTypes from "prop-types";
import List from '@material-ui/core/List';

import { Item } from "../Item";

const ListItem = ({
  tasksList,
  removeTask,
  completeTask,
  selectTask,
  currentTaskId
}) => (

    <List component="ul">
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
    </List>


);

ListItem.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  currentTaskId: PropTypes.number
};

ListItem.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  completeTask: () => {},
  currentTaskId: null
};

export default ListItem;
