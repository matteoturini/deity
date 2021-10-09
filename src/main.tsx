import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// workaround for crash
// no idea how long this will last
// @ts-ignore
window.global = window;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
