import React, { useState, useEffect } from 'react';
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
  const [newClass, setNewClass] = useState('loginBtn');
  const [disabled, setDisabled] = useState(true);

  const onChangeId = e => {
    setInputId(e.target.value);
  };
  const onChangePw = e => {
    setInputPw(e.target.value);
  };

  const colorChange = () => {
    inputId.includes('@') && inputPw.length >= 5
      ? setNewClass('loginBtnAllowed')
      : setNewClass('loginBtn');
  };
  const letItAble = () => {
    inputId.includes('@') && inputPw.length >= 5
      ? setDisabled(false)
      : setDisabled(true);
  };

  useEffect(() => {
    colorChange();
    letItAble();
  }, [inputId, inputPw]);

  return (
    <div className="loginContainer">
      <header>
        <h1 className="titleLogo">Westagram</h1>
      </header>
      <main className="loginMain">
        <form className="form" action="">
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
          <button
            type="button"
            className={newClass}
            onClick={goToMain}
            onChange={colorChange}
            disabled={disabled}
          >
            로그인
          </button>
        </form>
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
