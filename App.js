import React from 'react';
import {
  Main,
  LoginScreen,
  TransferScreen,
  NumberRegisterScreen,
  FullNameScreen,
  InsertValueScreen,
  ConfirmTransfer,
  BanksScreen,
  NumberAccountScreen,
  NumberAgencyScreen,
  DepositScreen,
  PaymentScreen,
  AccountDetails,
  ToDeposit,
  ReceiptPayment
} from './src/pages'
import 'react-native-gesture-handler';
import store from './src/redux/store'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
  

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
    <Provider store={store}>
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
            <Stack.Screen
              name="BanksScreen"
              component={BanksScreen}
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
              name="NumberAgencyScreen"
              component={NumberAgencyScreen}
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
              name="NumberAccountScreen"
              component={NumberAccountScreen}
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
              name="DepositScreen"
              component={DepositScreen}
              options={{
                headerShown: false,
                /* 
                ...TransitionPresets.SlideFromRightIOS, */
                transitionSpec: {
                  open: config,
                  close: config,
                },/* 
                gestureEnabled: true,
                gestureResponseDistance: 20,
                gestureDirection: "horizontal" */
              }}
            />
            <Stack.Screen
              name="PaymentScreen"
              component={PaymentScreen}
              options={{
                headerShown: false,
                /* 
                ...TransitionPresets.SlideFromRightIOS, */
                transitionSpec: {
                  open: config,
                  close: config,
                },/* 
                gestureEnabled: true,
                gestureResponseDistance: 20,
                gestureDirection: "horizontal" */
              }}
            />
            <Stack.Screen
              name="AccountDetails"
              component={AccountDetails}
              options={{
                headerShown: false,
                
                ...TransitionPresets.SlideFromRightIOS,
                transitionSpec: {
                  open: config,
                  close: config,
                },/* 
                gestureEnabled: true,
                gestureResponseDistance: 20,
                gestureDirection: "horizontal" */
              }}
            />
            <Stack.Screen
              name="ToDeposit"
              component={ToDeposit}
              options={{
                headerShown: false,
                
                ...TransitionPresets.SlideFromRightIOS,
                transitionSpec: {
                  open: config,
                  close: config,
                },/* 
                gestureEnabled: true,
                gestureResponseDistance: 20,
                gestureDirection: "horizontal" */
              }}
            />
            <Stack.Screen
              name="ReceiptPayment"
              component={ReceiptPayment}
              options={{
                headerShown: false,
                transitionSpec: {
                  open: config,
                  close: config,
                },/* 
                gestureEnabled: true,
                gestureResponseDistance: 20,
                gestureDirection: "horizontal" */
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}