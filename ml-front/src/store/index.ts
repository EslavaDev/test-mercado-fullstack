import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AppReducers } from './reducers';
import { AppMiddlewares } from './middlewares';

const persistConfig = {
  key: 'ml v1.0.0',
  storage,
  whitelist: ['mercadolibre'],
};
const persistedReducer = persistReducer(persistConfig, AppReducers());
const store = createStore(persistedReducer, AppMiddlewares());

export const AppStore = store;

export const persistor = persistStore(store);
