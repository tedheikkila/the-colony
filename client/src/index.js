import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Favicon from 'react-favicon'

ReactDOM.render(
  <React.StrictMode>
    <Favicon url='https://d3nn82uaxijpm6.cloudfront.net/favicon-32x32.png?v=dLlWydWlG8' />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
