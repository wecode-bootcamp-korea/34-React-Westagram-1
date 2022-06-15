import ReplyItems from './ReplyItems';

const ReplyBoard = props => {
  return (
    <div>
      {props.replyList.map((item, i) => (
        <ReplyItems
          item={item}
          index={i}
          setReplyList={props.setReplyList}
          replyList={props.replyList}
        />
      ))}
    </div>
  );
};

export default ReplyBoard;
