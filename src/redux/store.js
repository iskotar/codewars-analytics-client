import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';
import { createBrowserHistory } from 'history';

const logger = createLogger({
  collapsed: true
});

// Build the middleware for intercepting and dispatching navigation actions
const history = createBrowserHistory();

const store = createStore(
  //reducer,
  connectRouter(history)(rootReducer),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk, logger))
);

export default store;
