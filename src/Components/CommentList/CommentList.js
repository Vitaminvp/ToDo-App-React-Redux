import React from "react";
import PropTypes from "prop-types";

import { Comment } from "./Comment";
import List from "@material-ui/core/List";

const CommentList = ({ commentsList }) => (
  <List component="ul">
    {commentsList.map(({ id, text }) => (
      <Comment key={id} text={text} />
    ))}
  </List>
);

CommentList.propTypes = {
  commentsList: PropTypes.array
};

CommentList.defaultProps = {
  commentsList: []
};

export default CommentList;
