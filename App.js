import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './src/reducers'
import MainNavigator from './src'
import thunk from 'redux-thunk';

//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}