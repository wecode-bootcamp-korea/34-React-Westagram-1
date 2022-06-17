import { useState, useEffect } from 'react';
import CommentList from '../CommentList/CommentList';
import './feed.scss';

const Feed = () => {
  const [inputText, setInputText] = useState('');
  const [commentData, setCommentData] = useState([]);
  const [nextId, setNextId] = useState(4);

  const commentHandler = event => {
    const { value } = event.target;
    setInputText(value);
  };

  const addComment = event => {
    event.preventDefault();
    if (inputText === '') {
      return;
    }
    const nextComment = commentData.concat({
      userId: nextId,
      userComment: inputText,
    });
    setNextId(nextId + 1);
    setCommentData(nextComment);
    setInputText('');
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentData(data);
      });
  }, []);

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
        {commentData.map(name => (
          <CommentList
            commentDataId={name.userId}
            setCommentData={setCommentData}
            key={name.userId}
            comment={name.userComment}
          />
        ))}
      </ul>
      {/* 댓글 다는 곳 */}
      <form className="addComment" onSubmit={addComment}>
        <input
          value={inputText}
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
