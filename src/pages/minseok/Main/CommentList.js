const CommentList = ({ comment, index }) => {
  return (
    <li key={index.key} className="postingCommentList">
      <span className="userCommentId">김펭귄</span>
      <span className="userComment">{comment}</span>
      <button className="userCommentRemove">삭제</button>
    </li>
  );
};

export default CommentList;
