import React from 'react';
import reactDom from 'react-dom';
import App from './App'
import 'modern-normalize/modern-normalize.css';


reactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);