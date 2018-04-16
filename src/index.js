import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './MyRoutes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <MyRoutes />
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
