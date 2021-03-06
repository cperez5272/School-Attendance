import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import AppProvider from './context/AppProvider';


ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);