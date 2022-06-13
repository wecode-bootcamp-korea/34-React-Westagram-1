import React from 'react';

const CommentList = ({ comment }) => {
  return (
    <li className="postingCommentList">
      <span className="userCommentId">김펭귄</span>
      <span className="userComment">{comment}</span>
      <button className="userCommentLikeHeart">하트</button>
      <button className="userCommentRemove">삭제</button>
    </li>
  );
};

export default CommentList;
