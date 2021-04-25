import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabbed from './BottomTabbed/BottomTabbedStack';
import MapStack from './MapStack/MapStack';
import AuthStack from './AuthStack/AuthStack';
import ProfileStack from './ProfileStack/ProfileStack';

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AuthScreen" component={AuthStack} />
        <Stack.Screen name="HomeScreen" component={BottomTabbed} />
        <Stack.Screen name="MapStack" component={MapStack} />
        <Stack.Screen name="ProfileStack" component={ProfileStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
