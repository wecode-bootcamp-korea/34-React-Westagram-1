/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './login.scss';

function LoginIntae(props) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [className, setClassName] = useState('login_button_before');
  const onChangeId = e => {
    //id값이 onChangeId 함수가 끝나야만 등록된다.
    setId(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const onClickLogin = () => {
    navigate('/main-intae');
  };
  const infoValid = id.includes('@') && password.length >= 5;
  useEffect(() => {}, [id, password]);

  return (
    <>
      <div className="container">
        <div className="login_container">
          <div className="login_logo">Westagram</div>
          <form className="login_account">
            <input
              onChange={onChangeId}
              value={id}
              type="text"
              class="account_id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={onChangePassword}
              type="password"
              className="account_pw"
              placeholder="비밀번호"
            />
            <button
              className={
                infoValid ? 'login_button_after' : 'login_button_before'
              }
              onClick={onClickLogin}
              disabled={className.includes('before') ? true : false}
            >
              로그인
            </button>
          </form>

          <div className="forgot_pw">
            <a href="/">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginIntae;
