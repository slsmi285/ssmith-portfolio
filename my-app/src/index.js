import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
