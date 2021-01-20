/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiClient } from '../services';

const enhancers = [thunk.withExtraArgument(apiClient)];

export const AppMiddlewares = () => {
  let middlewares = compose(applyMiddleware(...enhancers));
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV === 'development') {
    middlewares = composeWithDevTools(middlewares);
  }
  return middlewares;
};
