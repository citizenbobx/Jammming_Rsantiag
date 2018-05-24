import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import './Components/App/App.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
