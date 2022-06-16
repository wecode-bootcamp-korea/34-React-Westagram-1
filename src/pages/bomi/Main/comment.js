import React from 'react';

const Comment = props => {
  const remove = event => {
    if (props.mine === false) {
      return;
    }
    let idx = event.target.id;
    let filteredArr = props.arr.filter(x => x !== props.arr[idx]);
    props.set(filteredArr);
  };

  return (
    <div>
      {props.arr.map((comment, index) => (
        <li key={index}>
          <span>{comment.name}</span>
          <span style={{ fontWeight: 400, paddingLeft: 8 }}>
            {comment.text}
          </span>
          <button id={index} onClick={remove}>
            x
          </button>
        </li>
      ))}
    </div>
  );
};

export default Comment;
