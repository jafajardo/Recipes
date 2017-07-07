import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import routes from './routes';
import Logger from './middlewares/logger';

const createStoreWithMiddleware = applyMiddleware(
  reduxThunk,
  Logger
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>
  , document.querySelector('.container-fluid'));
