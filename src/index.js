import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Counter from './components/counter';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  rootElement
);
