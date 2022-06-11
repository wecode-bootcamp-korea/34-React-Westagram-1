import React from 'react';
import { useState } from 'react';
import './reply.scss';

const ReplyItems = props => {
  const [icon, setIcon] = useState('fa-regular fa-heart');
  const changeLove = () => {
    if (icon === 'fa-regular fa-heart') {
      setIcon('fa-solid fa-heart');
    } else {
      setIcon('fa-regular fa-heart');
    }
  };

  return (
    <div className="user">
      vvjoahvv <span className="reply-item">{props.item}</span>
      <button
        className="deleteReply"
        onClick={() => {
          let copy = [...props.replyList];
          copy.splice(props.index, 1);
          props.setReplyList(copy);
        }}
      />
      <button className="heartLove" onClick={changeLove}>
        <i className={icon} />
      </button>
    </div>
  );
};

export default ReplyItems;
