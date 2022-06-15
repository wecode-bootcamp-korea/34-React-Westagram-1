import React, { useState, useEffect } from 'react';
import Comment from './Comment';

const CommentBox = () => {
  const [commentBox, setCommentBox] = useState([]);

  useEffect(() => {
    fetch('/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setCommentBox(data);
      });
  });

  return (
    <div className="commentBox">
      <ul>
        {commentBox.map(comment => {
          return (
            <Comment
              key={comment.id}
              name={comment.userName}
              comment={comment.content}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CommentBox;
