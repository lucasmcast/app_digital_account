import React from 'react';
import {
  Main,
  LoginScreen,
  TransferScreen,
  NumberRegisterScreen,
  FullNameScreen,
  InsertValueScreen,
  ConfirmTransfer
} from './src/pages'
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';

const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" mode="modal">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Main" component={Main} />
        <Stack.Screen
          name="TransferScreen"
          component={TransferScreen}
          options={{
            headerShown: false,
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="NumberRegister"
          component={NumberRegisterScreen}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            /* transitionSpec: {
              open: config,
              close: config,
            }, */
            gestureEnabled: true,
            gestureResponseDistance: 20,
            gestureDirection: "horizontal"
          }}
        />
        <Stack.Screen
          name="FullName"
          component={FullNameScreen}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            /* transitionSpec: {
              open: config,
              close: config,
            }, */
            gestureEnabled: true,
            gestureResponseDistance: 20,
            gestureDirection: "horizontal"
          }}
        />
        <Stack.Screen
          name="InsertValue"
          component={InsertValueScreen}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            /* transitionSpec: {
              open: config,
              close: config,
            }, */
            gestureEnabled: true,
            gestureResponseDistance: 20,
            gestureDirection: "horizontal"
          }}
        />
        <Stack.Screen
          name="ConfirmTransfer"
          component={ConfirmTransfer}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            /* transitionSpec: {
              open: config,
              close: config,
            }, */
            gestureEnabled: true,
            gestureResponseDistance: 20,
            gestureDirection: "horizontal"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
