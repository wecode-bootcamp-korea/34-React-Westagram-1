const History = () => {
  return (
    <div className="sidebarHistory">
      <div className="sidebarHistoryTitle">
        <h1>스토리</h1>
        <button className="commonButton">모두 보기</button>
      </div>
      <ul className="sidebarHistoryUser">
        {USER_NAMES.map(name => {
          return (
            <li key={name.id} className="sidebarHistoryUserList">
              <img
                className="sidebarHistoryUserListImage"
                src="/images/minseok/penguin-img.png"
                alt="유저이미지"
              />
              <div className="sidebarHistoryUserListId">
                <div className="sidebarHistoryUserListIdName">김원숭</div>
                <div className="sidebarHistoryUserListIdTime">16분 전</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const USER_NAMES = [
  { id: 1, text: '김토끼' },
  { id: 2, text: '김원숭' },
  { id: 3, text: '김거북' },
  { id: 4, text: '김기린' },
];

export default History;
