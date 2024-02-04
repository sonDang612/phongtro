import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from '~/redux';
import { BrowserRouter } from 'react-router-dom';

const { store, persistor } = reduxStore();

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);