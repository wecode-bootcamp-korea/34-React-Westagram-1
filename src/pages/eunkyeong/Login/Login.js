import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

const LoginEunkyeong = () => {
  const newId = 'kaka12345@naver.com';
  const startPW = 'KaK12345!';
  const firstName = 'Kim';
  const lastName = 'EK';
  const phone_number = '010-2222-2222';

  const navigate = useNavigate();
  const goToMain = () => {
    fetch('http://10.58.6.230:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        phone_number: phone_number,
        email: newId,
        password: startPW,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.access_token) {
          localStorage.setItem('accessToken', result.access_token);
        } else {
          alert('아이디와 비밀번호를 다시 확인하세요');
        }
      });
    navigate('/main-eunkyeong');
  };
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [newClass, setNewClass] = useState('loginBtn');
  const [disabled, setDisabled] = useState(true);

  const onChangeId = e => {
    const { value } = e.target;
    setInputId(value);
    //비구조화할당하는 이유 e.target, 가독성, 내가 접근하고 싶은 key만가져올수잇음. 나중에는 e.target.value.key[1].value 막 이런식으로 길어지는데 그걸 변수에 넣어두면 가독성도 높아진다.
  };
  const onChangePw = e => {
    const { value } = e.target;
    setInputPw(value);
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
    <div className="LoginEunkyeong">
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
