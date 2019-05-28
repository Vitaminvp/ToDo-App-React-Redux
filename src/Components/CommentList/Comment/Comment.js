import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";

const Comment = ({ text }) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar />
        <ListItemText primary={<React.Fragment>{text}</React.Fragment>} />
      </ListItem>
      <Divider light />
    </>
  );
};

Comment.propTypes = {
  text: PropTypes.string
};

Comment.defaultProps = {
  text: ""
};

export default Comment;
