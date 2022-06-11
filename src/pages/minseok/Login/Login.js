import React from 'react';
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
    setUserInfo(value => {
      return { ...value, [event.target.name]: event.target.value };
    });
  };

  const pwHandler = event => {
    setUserInfo(value => {
      return { ...value, [event.target.name]: event.target.value.length };
    });
  };

  let enabled = !Boolean(
    userInfo.userId && userInfo.userId.includes('@') && userInfo.userPw >= 5
  );

  return (
    <div className="boundaryLine">
      <section className="sectionWrapper">
        <h1 className="loginTitle">Westagram</h1>
        <article className="userInterface">
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
          <button disabled={enabled} onClick={mainNavi} className="loginButton">
            로그인
          </button>
        </article>
        <span className="passwordGuide">비밀번호를 잊으셨나요?</span>
      </section>
    </div>
  );
};

export default LoginMinseok;
