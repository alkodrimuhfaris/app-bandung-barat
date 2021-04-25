import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HeaderTransparent from '../../Components/Headers';

import Login from './Login';
import Signup from './Signup';
import WelcomeScreen from './WelcomeScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
    </Stack.Navigator>
  );
}
