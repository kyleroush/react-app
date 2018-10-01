import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Root from './Root'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from 'react-router-dom'

ReactDOM.render(<Root />,document.getElementById('root'));
registerServiceWorker();
