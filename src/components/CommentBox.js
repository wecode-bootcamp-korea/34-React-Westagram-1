import React, { useState, useEffect } from 'react';
import '../pages/bohyun/Main/main.scss';

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
            <div key={comment.id}>
              <span className="boldID">{comment.userName}</span>
              <span className="newCommentBox">{comment.content}</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentBox;
