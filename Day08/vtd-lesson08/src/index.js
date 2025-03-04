import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import VtdApp from './VtdApp';
import reportWebVitals from './reportWebVitals';

const vtdRoot = ReactDOM.createRoot(document.getElementById('vtdRoot'));
vtdRoot.render(
  <React.StrictMode>
    <VtdApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
