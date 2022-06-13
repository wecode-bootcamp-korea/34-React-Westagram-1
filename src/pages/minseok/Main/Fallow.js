const Fallow = () => {
  return (
    <div className="sidebarFallow">
      <div className="sidebarFallowTitle">
        <h1>회원님을 위한 추천</h1>
        <button className="commonButton">모두 보기</button>
      </div>
      <ul className="sidebarFallowUser">
        {[1, 2, 3, 4].map(() => {
          return (
            <li key={2} className="sidebarFallowUserList">
              <img
                className="sidebarFallowUserListImage"
                src="/images/minseok/penguin-img.png"
                alt="유저이미지"
              />
              <div className="sidebarFallowUserListId">
                <p className="sidebarFallowUserListIdName">김다람</p>
                <p className="sidebarFallowUserListIdTime">
                  ...외 2명이 추천누름
                </p>
              </div>
              <button className="sidebarFallowUserListButton commonButton">
                팔로우
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Fallow;
