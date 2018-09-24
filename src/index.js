import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectFour from './ConnectFour';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import MyComponent from './rest/MyComponent';
import ListEmoji from './rest/emoji/ListEmoji';
import Root from './Root'

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
