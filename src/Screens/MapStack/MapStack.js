import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HeaderTransparent from '../../Components/Headers';
import Details from './Details';

const Stack = createStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator
      navigationOptions={{
        header: () => {
          return <HeaderTransparent />;
        },
        headerTintColor: 'white',
      }}>
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  );
}
