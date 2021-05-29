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

const initialState={todos:[]};
const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'Add_ELEMENT':
          if(state.todos.length>0)
          {
            if(state.todos.filter(id=>id==action.payload).length==0)
              
              return { todos: [...state.todos,action.payload]}
            
          }
          return {todos:[action.payload]}
        
      case 'Delete_ELEMENT':
        if(state.todos.length>0)
          return { todos: state.todos.filter(id => id!==action.payload)}   
        else
          return state
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
