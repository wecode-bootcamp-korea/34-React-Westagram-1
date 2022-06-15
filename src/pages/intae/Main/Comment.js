import React from 'react';

const Comment = props => {
  const delBtn = () => {
    let copy = [...props.commentList];
    copy.splice(props.id, 1);
    props.setCommentList(copy);
  };

  return (
    <div id={props.id}>
      <li style={{ fontWeight: 600 }}>
        wendy <span style={{ fontWeight: 'normal' }}>{props.value}</span>
        <span style={{ float: 'right' }}>
          <button
            onClick={delBtn}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            ❌
          </button>
        </span>
      </li>
    </div>
  );
};

export default Comment;
