import React from 'react';
import ReactDOM from 'react-dom';
import 'App/App.css';
import App from 'App/App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
