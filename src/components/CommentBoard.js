import React from 'react';
import '../pages/bohyun/Main/main.scss';

const CommentBoard = ({ commentList, changeHeart, heart, setCommentList }) => {
  return commentList.map((comment, index) => {
    return (
      <div className="newCommentBox">
        <div className="newCommentEntry" key={index}>
          <div className="entry">
            <span className="boldID"> arielle</span>
            <span>{comment}</span>
          </div>
          <div className="newCommentButtons">
            <img onClick={changeHeart} src={heart} className="entryHeart" />
            <button
              className="deleteButton"
              onClick={() => {
                let copy = [...commentList];
                copy.splice(index, 1);
                setCommentList(copy);
              }}
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default CommentBoard;
