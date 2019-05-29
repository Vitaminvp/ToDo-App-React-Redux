import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import './index.scss';
import App from './Components/App';
import { Provider } from 'react-redux';
import {IntlProvider} from 'react-intl';

import store from './store';

ReactDOM.render((
    <Provider store={store}>
        <IntlProvider locale="en">
            <App />
        </IntlProvider>
    </Provider>
), document.getElementById('root'));


