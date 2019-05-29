import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const Item = ({
  text,
  isCompleted,
  id,
  removeTask,
  completeTask,
  selectTask,
  currentTaskId,
  commentsAmount
}) => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper
    },
    current: {
      borderLeft: "2px solid red"
    },
    notCurrent: {
      borderLeft: "2px solid transparent"
    }
  }));
  const classes = useStyles();

  return (
    <div>
      <ListItem
        button
        divider
        className={currentTaskId !== id ? classes.notCurrent : classes.current}
      >
        <i
          className="material-icons"
          onClick={() => completeTask(id)}
          style={{ marginRight: 20 }}
        >
          {isCompleted ? "check_circle" : "brightness_1"}
        </i>
        <ListItemText onClick={() => selectTask(id)}>
          <span>{text}</span>
        </ListItemText>
        <i className="material-icons" onClick={() => removeTask(id)}>
          clear
        </i>
      </ListItem>
    </div>
  );
  // <li className={currentTaskId === id ? "current" : ""}>
  //   <i className="material-icons" onClick={() => completeTask(id)}>
  //     {isCompleted ? "check_circle" : "brightness_1"}
  //   </i>
  //   <span
  //     className={isCompleted ? "completed text" : "text"}
  //     onClick={() => selectTask(id)}
  //   >
  //       {text} <sup>{commentsAmount ? commentsAmount : null}</sup>
  //   </span>
  //   <i className="material-icons" onClick={() => removeTask(id)}>
  //     clear
  //   </i>
  // </li>
};

Item.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  id: PropTypes.number,
  currentTaskId: PropTypes.number
};

Item.defaultProps = {
  text: "",
  isCompleted: false,
  removeTask: () => {},
  completeTask: () => {},
  id: null,
  currentTaskId: null
};

export default Item;
