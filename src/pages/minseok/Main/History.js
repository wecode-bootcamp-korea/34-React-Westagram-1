const History = () => {
  return (
    <div className="sidebarHistory">
      <div className="sidebarHistoryTitle">
        <h1>스토리</h1>
        <button className="commonButton">모두 보기</button>
      </div>
      <ul className="sidebarHistoryUser">
        {/* map함수 앞에 하드코딩한거 나중에 수정하기 */}
        {[1, 2, 3, 4].map(() => {
          return (
            <li key={1} className="sidebarHistoryUserList">
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

export default History;
