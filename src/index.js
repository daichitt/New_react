import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import App frem src/App.js


// https://reactjs.org/docs/strict-mode.html
// <React.StrictMode> is a tool for highlighting problems

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);