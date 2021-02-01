// Desabilitar Warning
LogBox.ignoreAllLogs(true)

import React, { Component } from 'react';
import {
  LogBox,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Home';
import Login from './src/Login';
import Cadastro from './src/Cadastro'; 


import { Provider } from 'react-redux';
import  { createStore } from 'redux';

import Reducers from './src/Reducers';

let store = createStore(Reducers);

const Stack = createStackNavigator();
const Navegador = () =>{
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


export default App = () =>{

  return (
    <Provider store={store}>
      <Navegador/>
    </Provider>
    
  )
}

