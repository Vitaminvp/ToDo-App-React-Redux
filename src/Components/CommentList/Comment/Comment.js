import React from "react";
import PropTypes from "prop-types";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const Comment = ({ text }) => {
    return <ListItem alignItems="flex-start">
      <ListItemAvatar>

      </ListItemAvatar>
      <ListItemText
          primary={
            <React.Fragment>
              {text}
            </React.Fragment>
          }
      />
    </ListItem>

};

Comment.propTypes = {
  text: PropTypes.string,
};

Comment.defaultProps = {
  text: "",
};

export default Comment;
