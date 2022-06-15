import React, { useState } from 'react';
import Comment from './Comment';

function Article(props) {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const onSubmit = e => {
    e.preventDefault();
    setCommentList(commnetValue => [comment, ...commnetValue]);
    setComment('');
  };
  const onChange = e => {
    setComment(e.target.value);
  };

  return (
    <article className="article1">
      <div className="user_profile">
        <div className="user_photo">
          <img src="../images/profile1.jpg" alt="" />
          <div className="user_id">{props.userId}</div>
        </div>
        <div className="seemore_btn">
          <img src="../images/option.png" alt="" />
        </div>
      </div>
      <div className="feed_image">
        <img src={`../images/${props.articleImg}.jpg`} alt="pizza" />
      </div>
      <section className="feed_contents">
        <div className="feed_description">
          <div className="response_icons">
            <div className="icons_left">
              <button className="heartbtn" />
              <button className="commentbtn" />
              <button className="directmessagebtn" />
            </div>
            <div className="icons_right">
              <i className="fa-regular fa-bookmark" />
            </div>
          </div>
          <div id="likes_figure" />
          <div className="user_comment">
            <span className="my_id">{props.userId}</span>
            <span className="my_comment">{props.articleText}</span>
          </div>
          <div className="registerd_reply">
            <span className="friends_id">seulgi</span>
            <span className="friends_comment">나도 먹고싶다!</span>
            <button className="reply_like">
              <i className="fa-regular fa-heart" id="small" />
            </button>
          </div>
          <div className="upload_date">2일 전</div>
        </div>
      </section>

      <div className="reply">
        <ul id="replylist">
          {commentList.map((comment, index) => (
            <Comment
              id={index}
              key={index}
              value={comment}
              commentList={commentList}
              setCommentList={setCommentList}
            />
          ))}
        </ul>

        <form action="" onSubmit={onSubmit}>
          <input
            value={comment}
            onChange={onChange}
            className="replybox"
            id="replysubmit"
            type="text"
            placeholder=" 댓글 달기..."
          />
          <button className="submitbtn">게시</button>
        </form>
      </div>
    </article>
  );
}

export default Article;
