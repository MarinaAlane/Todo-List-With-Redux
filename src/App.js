// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';
import ListTodo from './ListTodo';

const App = () => (
  <Provider store={store}>
    <ListTodo />   
  </Provider>
);

export default App;