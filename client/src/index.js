// This file connects our React application to the DOM, rendering our root component (App.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
// Provider wrapping around our App component allows us to access our redux store from anywhere in the app.
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducers';

import App from './App';

// This creates the Redux store, passing in the combined reducers. The store holds the entire state tree of the application.
const store = configureStore({
  reducer: reducers,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
