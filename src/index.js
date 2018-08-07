import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import Index from './layout/Index';
import './styles/style.css';

const history = createBrowserHistory();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Index />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
