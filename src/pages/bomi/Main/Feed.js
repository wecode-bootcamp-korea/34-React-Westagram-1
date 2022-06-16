import React, { useState, useEffect } from 'react';
import './main.scss';
import '../common.scss';
import Comment from './Comment';
import MockCommentList from './mockCommentList';
import './Feed.scss';

const Feed = props => {
  const [comment, setComment] = useState({ id: 0, name: 'UserID', text: '' });

  const [commentArray, setCommentArray] = useState([]);

  const [classname, setClassname] = useState('buttonDisabled');

  const handleComment = event => {
    setComment({ id: 0, name: 'UserId', text: event.target.value });
  };

  const publishComment = event => {
    event.preventDefault();
    if (comment.text === '') {
      return;
    }
    setCommentArray(commentValueList => [...commentValueList, comment]);
    const emptyText = { text: '' };
    setComment(emptyText);
  };

  useEffect(() => {
    comment.text.length > 0
      ? setClassname('buttonEnabled')
      : setClassname('buttonDisabled');
  }, [comment]);

  return (
    <div>
      <section className="div_feeds">
        <article className="article">
          <div className="feedProfile">
            <img
              className="profilePic"
              src="../images/bomi/feed-profile-1.jpeg"
            />
            <span
              style={{
                position: 'absolute',
                left: 53,
                top: 20,
                fontWeight: 500,
              }}
            >
              {props.name}
            </span>
          </div>
          <div className="imageWrapper">
            <img style={{ width: 470, height: 587.5 }} src={props.img} />
          </div>

          <div className="barWrapper">
            <button style={{ left: 10 }} id="heart">
              <img
                id="heartImg"
                className="buttonOpacity"
                style={{ width: 25, marginTop: 1, marginLeft: -5 }}
                src="../images/bomi/navHeart.jpeg"
              />
            </button>
            <button style={{ left: 50 }} id="comment">
              <img
                className="buttonOpacity"
                style={{ width: 28, marginTop: -1, marginLeft: -6 }}
                src="../images/bomi/comment.png"
              />
            </button>
            <button style={{ left: 90 }} id="share">
              <img
                className="buttonOpacity"
                style={{ width: 24, marginTop: 2, marginLeft: -5 }}
                src="../images/bomi/navShare.webp"
              />
            </button>
            <button style={{ right: 10 }} id="save">
              <img
                className="buttonOpacity"
                style={{ width: 26 }}
                src="../images/bomi/save.webp"
              />
            </button>
          </div>

          <div className="reaction">
            <p>
              <span>abcd_123</span>님 <span>여러 명</span>이 좋아합니다
            </p>
            <p>
              <span> {props.name} </span> {props.text}
            </p>
            <p style={{ cursor: 'pointer', color: '#8E8E8E', height: 10 }}>
              댓글 10,068개 모두 보기
            </p>

            <ul className="commentSection" onSubmit={props.publishComment}>
              <MockCommentList />
              <Comment
                setcomment={setComment}
                arr={commentArray}
                set={setCommentArray}
              />
            </ul>

            <p style={{ fontSize: 10, color: '#8E8E8E' }}>1일 전</p>
          </div>

          <div className="comment">
            <img
              style={{ width: 28, height: 30 }}
              src="../images/bomi/smiley.png"
            />
            <input
              id="commentInput"
              onChange={handleComment}
              type="text"
              value={comment.text}
              placeholder="댓글 달기..."
            />
            <button
              id="publish"
              onClick={publishComment}
              className={classname}
              style={{ fontSize: 14 }}
            >
              게시
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Feed;
