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
    setID(event.target.value);
  };

  const onChangePw = event => {
    setPW(event.target.value);
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
            <Link to="/main" className="loginWestagram">
              Westagram
            </Link>
          </div>

          <div className="form">
            <div className="id">
              <input
                // onChange={(event) => setID(event.target.value)}
                type="text"
                placeholder="Phone number, username, or email"
                className="inputID"
                onChange={onChangeID}
              />
              <h1>{id}</h1>
            </div>
            <div className="pw">
              <input
                // onChange={(event) => setPW(event.target.value)}
                onChange={onChangePw}
                type="password"
                placeholder="Password"
                className="inputPW"
              />
            </div>
            <p>{pw}</p>
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

      <div className="footer"></div>
    </div>
  );
};
export default LoginBohyun;
