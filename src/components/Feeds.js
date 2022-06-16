import React from 'react';
import CommentBoard from './CommentBoard';
import CommentBox from './CommentBox';

const Feeds = ({
  commentList,
  changeHeart,
  heart,
  setCommentList,
  addComment,
  inputValue,
  setInputValue,
}) => {
  return (
    <div className="article">
      <div className="user_whole">
        <img
          src={require('../assets/bohyun/img_profile/profile_left_top.JPG')}
          width="20px"
          className="circle_maintop"
          alt="Small thumbnail profile taken in Athens"
        />
        <div className="user_info">
          <p>arielle</p>
        </div>
        <div className="dropdown">
          <i className="fa-solid fa-ellipsis" />
        </div>
      </div>
      <img
        src={require('../assets/bohyun/img_profile/main.JPG')}
        className="main_img"
        alt="Main profile taken in Paris"
      />
      <div className="buttons_whole">
        <div className="buttons_left">
          <i className="fa-solid fa-heart" />
          <i className="fa-solid fa-comment" />
          <i className="fa-solid fa-paper-plane" />
        </div>
        <div className="buttons_right">
          <i className="fa-solid fa-bookmark" />
        </div>
      </div>
      <div className="likes">
        <img
          src={require('../assets/bohyun/img_profile/profile_left_bottom.jpeg')}
          className="circle_mainbottom"
          img="User who liked my picture"
        />
        <div className="like_counts">
          <p>
            Liked by <span className="boldID">realisshoman</span> and others
          </p>
        </div>
      </div>
      <div className="descriptions">
        <span className="boldID">arielle</span>

        <div className="caption">
          <p>
            So this is it ! 🙌🏽 I’ve just landed from Milan and that wraps up my
            flying life as Emirates cabin crew 👠 I have been super blessed and
            lucky enough to travel to 41 countries and 71 cities around the
            world meeting amazing people along the way 🌏
          </p>
        </div>
      </div>
      <div className="friendComment_whole">
        <div className="friendComment_user">
          <span className="boldID">realisshoman</span>
          <div className="friendComment_redHeart">
            <p>❤️❤️</p>
          </div>
        </div>
        <div className="friendComment_heart">
          <img
            src={require('../assets/bohyun/icons/heart.png')}
            width="13px"
            alt="Heart icon inline with a comment"
          />
        </div>
      </div>

      <CommentBox />

      <CommentBoard
        commentList={commentList}
        changeHeart={changeHeart}
        heart={heart}
        setCommentList={setCommentList}
      />

      <form onSubmit={addComment} className="commentsWrapper">
        <div className="comments_box">
          <input
            value={inputValue}
            type="text"
            placeholder="comment"
            className="comments-box"
            onChange={event => setInputValue(event.target.value)}
          />
        </div>
        <div className="comments_button">
          <button id="postButton">post</button>
        </div>
      </form>
    </div>
  );
};

export default Feeds;
