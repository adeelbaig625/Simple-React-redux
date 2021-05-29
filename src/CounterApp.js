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
  TextInput,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native';

import {connect} from 'react-redux'

const CounterApp=({todos,Add,Delete}) => {
  const [id,setid]=React.useState(null);
  const displayids=()=>
  {
    if(todos.length>0)
    {
      return todos.map(item=>
        {
         return <Text>{item}</Text>
        })
       
    }
    
    
  }
  return (
    <>
      <View style={{flex:1,backgroundColor:'#fff',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <TextInput value={id} placeholder={'Enter number'}keyboardType="numeric" onChangeText={setid}/>
         
            <TouchableOpacity onPress={() =>
            {
              if(id)
              {
                Add(Number(id))
                setid('')
              }
              else 
              Alert.alert('no number!')
               
            }}
               ><Text>Submit</Text></TouchableOpacity>
         
            <TouchableOpacity  onPress={() => 
            {
              if(id)
              {
                Delete(Number(id))
                setid('')
              }
              else 
              Alert.alert('no number!')
              
            }}><Text>Delete</Text></TouchableOpacity>
          
          {displayids()}
      </View>
    </>
  );
};
const mapStateToProps=(state)=>
{
    return {
        todos:state.todos
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return{
        Add:(item)=>dispatch({type:'Add_ELEMENT',payload:item}),
        Delete:(item)=>dispatch({type:'Delete_ELEMENT',payload:item}),   
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);
