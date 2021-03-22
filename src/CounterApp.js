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
  TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux'

const CounterApp=({counter,increaseCounter,decreaseCounter}) => {
  return (
    <>
      <View style={{flex:1,backgroundColor:'#fff',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <View style={{display:'flex',flexDirection:'row',width:200,justifyContent:'space-around'}}>
            <TouchableOpacity onPress={() => increaseCounter()}><Text>Increase</Text></TouchableOpacity>
            <Text>{counter}</Text>
            <TouchableOpacity  onPress={() => decreaseCounter()}><Text>Decrease</Text></TouchableOpacity>
          </View>
      </View>
    </>
  );
};
const mapStateToProps=(state)=>
{
    return {
        counter:state.counter
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return{
        increaseCounter:()=>dispatch({type:'INCREASE_COUNTER'}),
        decreaseCounter:()=>dispatch({type:'DECREASE_COUNTER'})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);
