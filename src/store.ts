import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './modules';

const persistConfig = {
  key: 'root',
  storage
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const store = createStore(enhancedReducer, applyMiddleware(logger));
  const persistor = persistStore(store as any);
  return { store, persistor };
}
