import './header.scss';

const Header = () => {
  return (
    <header className="topArea">
      <nav className="logo">
        <img src="/images/minseok/instagram.png" alt="westagramLogo" />
        <span>westagram</span>
      </nav>
      <input type="search" placeholder="🔍 검색" />
      <nav className="icon">
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          alt="탐색"
        />
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="하트"
        />
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt="마이페이지"
        />
      </nav>
    </header>
  );
};

export default Header;
