import React from 'react';
import {Main} from './src/pages/Main';
import  {LoginScreen} from './src/pages/LoginScreen'
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen}/>
        <Stack.Screen options={{ headerShown: false }} name="Main" component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>   
  );
}
