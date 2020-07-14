import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Counters from './components/counters';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>,
  rootElement
);
