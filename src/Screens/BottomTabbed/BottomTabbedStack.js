import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const DEVICE_WIDTH = Dimensions.get('window').width;

import Map from './MapTabbed';
import SOSStack from './SOSTabbed';
import SettingTabbed from './SettingTabbed';

const BottomTab = createBottomTabNavigator();

export default function BottomStackNav({navigation}) {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        style: {
          backgroundColor: '#652D92',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 5,
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={Map}
        options={{
          tabBarIcon: ({size, color, focused}) => {
            return (
              <Icon
                type="FontAwesome5"
                name="map-marker-alt"
                style={styles.icon}
              />
            );
          },
          tabBarLabel: ({focused, tintColor}) => {
            if (!focused) {
              return null;
            } else {
              return <Text style={styles.label}>Home</Text>;
            }
          },
        }}
      />
      <BottomTab.Screen
        name="SOS"
        component={SOSStack}
        options={{
          tabBarIcon: ({size, color, focused}) => {
            return (
              <Icon
                type="FontAwesome5"
                name="exclamation-circle"
                style={styles.icon}
              />
            );
          },
          tabBarLabel: ({focused, tintColor}) => {
            if (!focused) {
              return null;
            } else {
              return <Text style={styles.label}>SOS</Text>;
            }
          },
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingTabbed}
        options={{
          tabBarIcon: ({size, color, focused}) => {
            return (
              <Icon type="FontAwesome5" name="tools" style={styles.icon} />
            );
          },
          tabBarLabel: ({focused, tintColor}) => {
            if (!focused) {
              return null;
            } else {
              return <Text style={styles.label}>Setting</Text>;
            }
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: '#FFFFFF',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});
