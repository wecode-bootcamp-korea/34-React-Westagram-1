import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/reset.scss';
import './styles/common.scss';
import './styles/variables.scss';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
