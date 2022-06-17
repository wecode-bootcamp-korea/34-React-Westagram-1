import Header from '../../../components/Header/Header';
import Feed from '../Main/components/Feed/Feed';
import Aside from '../Main/components/Aside/Aside';
import Footer from '../../../components/Footer/Footer';
import './main.scss';

export const MainMinseok = () => {
  return (
    <div className="twoDividedArea">
      <Header />
      <div className="bottomArea">
        <main className="main">
          <Feed />
          <Aside />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default MainMinseok;
