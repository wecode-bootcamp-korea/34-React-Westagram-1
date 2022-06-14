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

  const deleteReply = () => {
    let copy = [...props.replyList];
    copy.splice(props.index, 1);
    props.setReplyList(copy);
  };

  return (
    <li className="user">
      vvjoahvv <span className="replyItem">{props.item}</span>
      <button className="deleteReply" onClick={deleteReply} />
      <button className="heartLove" onClick={changeLove}>
        <i className={icon} />
      </button>
    </li>
  );
};

export default ReplyItems;
