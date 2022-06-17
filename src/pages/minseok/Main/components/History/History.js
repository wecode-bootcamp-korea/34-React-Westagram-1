import './history.scss';

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
                src={name.userImage}
                alt="유저이미지"
              />
              <div className="sidebarHistoryUserListId">
                <div className="sidebarHistoryUserListIdName">
                  {name.userName}
                </div>
                <div className="sidebarHistoryUserListIdTime">
                  {name.userTime}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const USER_NAMES = [
  {
    id: 1,
    userName: '김토끼',
    userImage: '/images/minseok/penguin-img.png',
    userTime: '1시간 전',
  },
  {
    id: 2,
    userName: '김원숭',
    userImage: '/images/minseok/penguin-img.png',
    userTime: '13시간 전',
  },
  {
    id: 3,
    userName: '김거북',
    userImage: '/images/minseok/penguin-img.png',
    userTime: '5시간 전',
  },
  {
    id: 4,
    userName: '김기린',
    userImage: '/images/minseok/penguin-img.png',
    userTime: '7시간 전',
  },
];

export default History;
