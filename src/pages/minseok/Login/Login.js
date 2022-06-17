import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './login.scss';

const LoginMinseok = () => {
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPw: '',
  });

  let enabled = !Boolean(
    userInfo.userId &&
      userInfo.userId.includes('@') &&
      userInfo.userPw.length >= 5
  );

  const mainNavi = () => {
    !enabled ? navigate('/main-minseok') : alert('아무것도 입력되지 않았어요');
  };

  const navigate = useNavigate();

  const inputHandler = event => {
    const { name, value } = event.target;
    setUserInfo(prev => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="boundaryLine">
      <section className="sectionWrapper">
        <h1 className="loginTitle">Westagram</h1>
        <form onSubmit={mainNavi} className="userInterface">
          <input
            onChange={inputHandler}
            name="userId"
            className="userName"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={inputHandler}
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

// const mainNavi = event => {
//   event.preventDefault();
//   !enabled
//     ? fetch('http://10.58.0.63:8000/users/login', {
//         method: 'POST',
//         body: JSON.stringify({
//           email: userInfo.userId,
//           password: userInfo.userPw,
//         }),
//       })
//         .then(response => response.json())
//         .then(() => {
//           navigate('/main-minseok');
//         })
//     : alert('아무것도 입력되지 않았어요');
// };
