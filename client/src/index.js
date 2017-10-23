import React from 'react';
import { render } from 'react-dom';
import './index.css';

import Root from './components/Root';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

render(
    <Root store={store} />,
    document.getElementById('root')
);

registerServiceWorker();
