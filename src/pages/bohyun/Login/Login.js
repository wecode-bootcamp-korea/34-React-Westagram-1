import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';

const LoginBohyun = () => {
  const navigate = useNavigate();
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');
  const [newClass, setNewClass] = useState('loginButton');

  const onChangeID = event => {
    const { value } = event.target;
    setID(value);
  };

  const onChangePw = event => {
    const { value } = event.target;
    setPW(value);
  };
  const checkInfo = () => {
    id.includes('@') && pw.length > 0
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

          <div className="form">
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
                onChange={onChangePw}
                type="password"
                placeholder="Password"
                className="inputPW"
              />
            </div>

            <button type="button" onClick={checkInfo} className={newClass}>
              Log In
            </button>
          </div>

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
