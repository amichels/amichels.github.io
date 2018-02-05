import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import baguetteBox from 'baguettebox.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

baguetteBox.run('.js-portfolio');