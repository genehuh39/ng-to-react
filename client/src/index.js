import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import App from './containers/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import {fetchFighters} from "./actions/fighterActions";

store.dispatch(fetchFighters());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
