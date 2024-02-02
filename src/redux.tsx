import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { persistStore } from 'redux-persist';

const reduxStore = () => {
  const store = createStore(rootReducer);
  const persistor = persistStore(store);

  return { store, persistor };
};

export default reduxStore;
