import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './context/AuthProvider';
/* AOS */
import AOS from 'aos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </React.StrictMode>
);

AOS.init();
reportWebVitals();
