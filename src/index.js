import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todo from './Todo';

// https://reactjs.org/docs/strict-mode.html
// <React.StrictMode> is a tool for highlighting problems

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);