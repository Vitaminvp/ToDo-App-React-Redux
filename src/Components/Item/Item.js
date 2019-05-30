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
    },
    sup: {
      borderRadius: "10px",
      backgroundColor: "#3f51b5",
      padding: "0 9px 2px",
      color: "white",
      fontWeight: "600",
      marginLeft: "10px"
    },
    completed: {
      textDecoration: "line-through;"
    }
  }));
  const classes = useStyles();

  return (
    <ListItem
      button
      divider
      className={+currentTaskId !== id ? classes.notCurrent : classes.current}
    >
      <i
        className="material-icons"
        onClick={() => completeTask(id)}
        style={{ marginRight: 20 }}
      >
        {isCompleted ? "check_circle" : "brightness_1"}
      </i>
      <ListItemText onClick={() => selectTask(id)}>
        <span className={isCompleted ? classes.completed : ""}>{text}</span>
        {commentsAmount ? (
          <sup className={classes.sup}>{commentsAmount}</sup>
        ) : null}
      </ListItemText>
      <i className="material-icons" onClick={() => removeTask(id)}>
        clear
      </i>
    </ListItem>
  );
};

Item.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  id: PropTypes.number,
  currentTaskId: PropTypes.string
};

Item.defaultProps = {
  text: "",
  isCompleted: false,
  removeTask: () => {},
  completeTask: () => {},
  id: null,
  currentTaskId: ''
};

export default Item;
