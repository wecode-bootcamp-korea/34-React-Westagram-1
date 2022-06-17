import USER_INFO from '../USER_INFO/USER_INFO';
import './history.scss';

const History = () => {
  return (
    <div className="sidebarHistory">
      <div className="sidebarHistoryTitle">
        <h1>스토리</h1>
        <button className="commonButton">모두 보기</button>
      </div>
      <ul className="sidebarHistoryUser">
        {USER_INFO.map(name => {
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

export default History;
