import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderTransparent from '../../Components/Headers';
import Profile from './Profile';

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      navigationOptions={{
        header: () => {
          return <HeaderTransparent />;
        },
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="Profile"
        options={{title: 'Edit Profile'}}
        component={Profile}
      />
    </Stack.Navigator>
  );
}
