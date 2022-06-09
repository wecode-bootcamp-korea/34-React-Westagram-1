import React from 'react';

import LoginIntae from './pages/intae/Login/Login';
import MainIntae from './pages/intae/Main/Main';

import LoginBohyun from './pages/bohyun/Login/Login';
import MainBohyun from './pages/bohyun/Main/Main';

import LoginBomi from './pages/bomi/Login/Login';
import MainBomi from './pages/bomi/Main/Main';

import LoginEunkyeong from './pages/eunkyeong/Login/Login';
import MainEunkyeong from './pages/eunkyeong/Main/Main';

import LoginMinseok from './pages/minseok/Login/Login';
import MainMinseok from './pages/minseok/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
import { BrowserRouter } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login-intae" element={<LoginIntae />} />
        <Route path="/main-intae" element={<MainIntae />} />
        <Route path="/login-bohyun" element={<LoginBohyun />} />
        <Route path="/main-bohyun" element={<MainBohyun />} />
        <Route path="/login-bomi" element={<LoginBomi />} />
        <Route path="/main-bomi" element={<MainBomi />} />
        <Route path="/login-minseok" element={<LoginMinseok />} />
        <Route path="/main-minseok" element={<MainMinseok />} />
        <Route path="/login-eunkyeong" element={<LoginEunkyeong />} />
        <Route path="/main-eunkyeong" element={<MainEunkyeong />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
