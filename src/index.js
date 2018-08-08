import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import Index from './layout/Index';
import history from './history';
import './styles/style.css';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Index />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
