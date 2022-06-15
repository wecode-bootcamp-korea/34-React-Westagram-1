import React, { useState, useEffect } from 'react';
import './login.scss';
import '../../bomi/common.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [classname, setClassname] = useState('disableButton');
  const navigate = useNavigate();

  const goToMain = () => {
    if (classname === 'enableButton') {
      navigate('/main-bomi');
    }
  };

  const server = e => {
    e.preventDefault();
    fetch('http://10.58.6.173:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.access_token) {
          localStorage.setItem('token', result.access_token);
          goToMain();
        } else {
          alert('아이디 또는 패스워드가 틀렸습니다.');
        }
      });
  };

  const handleIdInput = event => {
    setId(event.target.value);
  };

  const handlePwInput = event => {
    setPw(event.target.value);
  };

  useEffect(() => {
    id.includes('@') && pw.length >= 5
      ? setClassname('enableButton')
      : setClassname('disableButton');
  }, [id, pw]);

  return (
    <>
      <div className="login-pg">
        <header class="logo">Westagram</header>
        <div className="wrapper">
          <input
            id="idInput"
            onChange={handleIdInput}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            id="passwordInput"
            onChange={handlePwInput}
            type="password"
            placeholder="비밀번호"
          />
          <button id="button" className={classname} onClick={server}>
            로그인
          </button>
        </div>
        <div className="wrapperBottom">
          <div
            style={{
              position: 'absolute',
              top: 20,
              fontSize: 13,
              color: '#A9A9A9',
            }}
          >
            ──────── 또는 ────────
          </div>
          <div className="facebook">
            <button>
              <a
                target="_blank"
                href="https://www.facebook.com"
                rel="noreferrer"
              >
                <img
                  className="facebookimg"
                  src="../images/bomi/facebook-icon.png"
                />
                <span
                  style={{ fontSize: 13, fontWeight: 600, color: '#385085' }}
                >
                  Facebook으로 로그인
                </span>
              </a>
            </button>
          </div>
          <div className="forgetPassword">
            <button style={{ fontWeight: 500, color: '#01376A' }}>
              비밀번호를 잊으셨나요?
            </button>
          </div>
        </div>
      </div>

      <div className="newAccount">
        <p style={{ fontSize: 14 }}> 계정이 없으신가요? </p>
        <button style={{ fontSize: 14, paddingLeft: 10 }}> 가입하기 </button>
      </div>
    </>
  );
};

export default Login;
