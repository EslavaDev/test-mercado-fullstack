import { combineReducers } from 'redux';
import { layoutReducer } from './layout';
import { MLReducer } from './mercadolibre';

export const AppReducers = () =>
  combineReducers({
    layout: layoutReducer,
    mercadolibre: MLReducer,
  });
