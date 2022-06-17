import './commentList.scss';

const CommentList = ({ comment, setCommentData, commentDataId }) => {
  const removeComment = () =>
    setCommentData(prev => prev.filter(el => el.userId !== commentDataId));

  return (
    <li className="postingCommentList">
      <span className="userCommentId">김펭귄</span>
      <span className="userComment">{comment}</span>
      <button onClick={removeComment} className="userCommentRemove">
        삭제
      </button>
    </li>
  );
};

export default CommentList;
