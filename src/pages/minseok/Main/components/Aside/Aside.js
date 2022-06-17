import History from '../History/History';
import Fallow from '../Fallow/Fallow';
import './aside.scss';

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebarHost">
        <img
          className="sidebarHostImage"
          src="/images/minseok/penguin-img.png"
          alt="호스트이미지"
        />
        <div className="sidebarHostId">
          <p className="sidebarHostIdName">김펭귄</p>
          <p className="sidebarHostIdDescription">프론트 앤드 개발자</p>
        </div>
      </div>
      <History />
      <Fallow />
    </aside>
  );
};

export default Aside;
