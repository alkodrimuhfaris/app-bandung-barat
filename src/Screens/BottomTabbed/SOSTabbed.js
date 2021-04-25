import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function SOSTabbed() {
  return (
    <View style={styles.parent}>
      <Text>SOS features stand for addtional features only</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
