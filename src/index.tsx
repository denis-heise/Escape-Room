import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';

render(
  <React.Fragment>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.Fragment>,
  document.getElementById('root'),
);
