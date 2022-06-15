import React from 'react';

const Comment = ({ comment, name, key }) => {
  return (
    <div key={key}>
      <span>{name}</span>
      <span>{comment}</span>
    </div>
  );
};

export default Comment;
