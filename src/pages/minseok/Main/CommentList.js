import React from 'react';

const CommentList = ({ comment }) => {
  return (
    <li className="postingCommentList">
      <span className="userCommentId">김펭귄</span>
      <span className="userComment">{comment}</span>
    </li>
  );
};

export default CommentList;
