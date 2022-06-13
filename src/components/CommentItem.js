import React from 'react';

const CommentItem = ({ comment }) => {
  return (
    <div className=".commentItem">
      <h1>{comment}</h1>
    </div>
  );
};

export default CommentItem;
