import '../../../styles/reset.scss'; // 이거 확인해보고 삭제
import './main.scss';
import Header from './Header';
import Feed from './Feed';
import History from './History';
import Fallow from './Fallow';

const MainMinseok = () => {
  return (
    <div className="twoDividedArea">
      <Header />
      <div className="bottomArea">
        <main className="main">
          <Feed />
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
          <footer className="footer">
            <p className="footerInformation">위스타그램 정보입니다.</p>
            <p className="footerMakeYear">2022년도에 제작</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default MainMinseok;
