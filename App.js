/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import CounterApp from './src/CounterApp'
const initialState={
  counter:0
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'INCREASE_COUNTER':
          return { counter: state.counter + 1 }
      case 'DECREASE_COUNTER':
          return { counter: state.counter - 1 }
  }
  return state
}

const store=createStore(reducer)
const App=() => {

  return (
    <>
    <Provider store={store}>
      <CounterApp/>
      </Provider>
    </>
  );
};


export default App;
