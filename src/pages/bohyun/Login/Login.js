import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';

const LoginBohyun = () => {
  const navigate = useNavigate();
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');
  const [newClass, setNewClass] = useState('loginButton');

  const postUserData = () => {
    if (id.includes('@') && pw.length > 4) {
      navigate('/main-bohyun');

      fetch('http://10.58.5.166:8000/users/signin', {
        method: 'POST',
        body: JSON.stringify({
          email: 'park@gmail.com',
          password: 'P@ssw0rd!',
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.access_token) {
            localStorage.setItem('access_token', result.access_token);
            console.log(result.access_token);
          }
        });
    }
  };

  const onChangeID = event => {
    const { value } = event.target;
    setID(value);
  };

  const onChangePw = event => {
    const { value } = event.target;
    setPW(value);
  };
  const checkInfo = () => {
    id.includes('@') && pw.length > 4
      ? setNewClass('loginButtonActive')
      : setNewClass('loginButton');
  };

  useEffect(() => {
    checkInfo();
  }, [id, pw]);

  return (
    <div className="login">
      <div className="wrapper">
        <div className="header">
          <div className="logo">
            <Link to="/main-bohyun" className="loginWestagram">
              Westagram
            </Link>
          </div>

          <form className="form">
            <div className="id">
              <input
                type="text"
                placeholder="Phone number, username, or email"
                className="inputID"
                onChange={onChangeID}
              />
            </div>
            <div className="pw">
              <input
                type="password"
                placeholder="Password"
                className="inputPW"
                onChange={onChangePw}
              />
            </div>

            <button
              type="button"
              className={newClass}
              onChange={checkInfo}
              onClick={postUserData}
            >
              Log In
            </button>
          </form>

          <div className="forgot">
            <p>
              <a href="#">Forgot password?</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer" />
    </div>
  );
};
export default LoginBohyun;
