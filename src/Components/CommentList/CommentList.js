import React from "react";
import PropTypes from "prop-types";

import { Comment } from "./Comment";

const CommentList = ({ commentsList }) => (
    <ul className="todo-list">
        {commentsList.map(({ id, text }) => (
            <Comment
                key={id}
                text={text}
            />
        ))}
    </ul>
);

CommentList.propTypes = {
    commentsList: PropTypes.array,
};

CommentList.defaultProps = {
    commentsList: [],
};

export default CommentList;
