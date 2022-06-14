import './login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginMinseok = () => {
  const navigate = useNavigate();

  const mainNavi = () => {
    !enabled ? navigate('/main-minseok') : alert('아무것도 입력되지 않았어요');
  };

  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPw: '',
  });

  const idHandler = event => {
    const { name, value } = event.target;
    setUserInfo(prev => {
      return { ...prev, [name]: value };
    });
  };

  const pwHandler = event => {
    const { name, value } = event.target;
    setUserInfo(prev => {
      return { ...prev, [name]: value.length };
    });
  };

  let enabled = !Boolean(
    userInfo.userId && userInfo.userId.includes('@') && userInfo.userPw >= 5
  );

  return (
    <div className="boundaryLine">
      <section className="sectionWrapper">
        <h1 className="loginTitle">Westagram</h1>
        <form onSubmit={mainNavi} className="userInterface">
          <input
            onChange={idHandler}
            name="userId"
            className="userName"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={pwHandler}
            name="userPw"
            className="userPassword"
            type="password"
            placeholder="비밀번호"
          />
          <button disabled={enabled} className="loginButton" type="submit">
            로그인
          </button>
        </form>
        <span className="passwordGuide">비밀번호를 잊으셨나요?</span>
      </section>
    </div>
  );
};

export default LoginMinseok;
