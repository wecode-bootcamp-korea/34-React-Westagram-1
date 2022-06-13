import { useState } from 'react';
import CommentList from './CommentList';

const Feed = () => {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const commentHandler = event => {
    setComment(event.target.value);
  };

  const addComment = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray([...commentArray, comment]);
    setComment('');
  };

  return (
    <article className="posting">
      <div className="writerProfile">
        <img
          className="writerProfileImage"
          src="/images/minseok/penguin-img.png"
          alt="프로필이미지"
        />
        <p>cannon_mj</p>
        <img
          className="writerProfileDetails"
          src="/images/minseok/addHost.png"
          alt="더보기"
        />
      </div>
      <div className="postingImage">
        <img src="/images/minseok/feed-images.jpg" alt="바다사진" />
      </div>
      <i className="postingIcon">
        <img
          className="postingIconHeart"
          src="/images/minseok/feedHeart.png"
          alt="좋아요아이콘"
        />
        <img
          className="postingIconSayballon"
          src="/images/minseok/sayBalloon.png"
          alt="말풍선아이콘"
        />
        <img
          className="postingIconShare"
          src="/images/minseok/share.png"
          alt="공유하기아이콘"
        />
        <img
          className="postingIconBookmark"
          src="/images/minseok/bookMark.png"
          alt="북마크아이콘"
        />
      </i>
      <ul className="postingComment">
        <p className="RepresentativeUser">땡땡이 좋아합니다</p>
        {commentArray.map((comment, index) => (
          <CommentList key={index} comment={comment} />
        ))}
      </ul>
      {/* 댓글 다는 곳 */}
      <form className="addComment" onSubmit={addComment}>
        <input
          value={comment}
          onChange={commentHandler}
          className="addCommentText"
          type="text"
          placeholder="댓글 달기..."
        />
        <button className="addCommentButton commonButton" type="submit">
          게시
        </button>
      </form>
    </article>
  );
};

export default Feed;
