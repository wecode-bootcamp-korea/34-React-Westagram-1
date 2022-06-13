import React from 'react';
import CommentItem from './CommentItem';

const CommentBoard = ({ commentList }) => {
  return (
    <div>
      <h1>Hey you</h1>
      <CommentItem />
      {commentList.map(comment => {
        // return <CommentItem comment={comment} />;
        return (
          <div className=".commentItem">
            <h1>{comment}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBoard;
