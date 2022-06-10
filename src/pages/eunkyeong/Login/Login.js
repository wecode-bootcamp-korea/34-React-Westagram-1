import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";
import './login.scss';

const LoginEunkyeong = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-eunkyeong');
  };
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const onChangeId = e => {
    setInputId(e.target.value);
  };
  const onChangePw = e => {
    setInputPw(e.target.value);
  };

  return (
    <div className="loginContainer">
      <header>
        <h1 className="titleLogo">Westagram</h1>
      </header>
      <main className="loginMain">
        <input
          onChange={onChangeId}
          type="text"
          id="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          className="logInput"
        />
        <input
          onChange={onChangePw}
          type="password"
          id="password"
          placeholder="비밀번호"
          className="logInput"
        />
        {/* <Link to="/main" className="toMain"></Link>  */}
        <button type="button" className="loginBtn" onClick={goToMain}>
          로그인
        </button>
      </main>
      <footer>
        <a href="/" className="forgotPw">
          비밀번호를 잊으셨나요?
        </a>
      </footer>
    </div>
  );
};

export default LoginEunkyeong;
