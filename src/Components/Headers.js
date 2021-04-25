import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Headers() {
  return (
    <View style={styles.parent}>
      <LinearGradient
        colors={['black', '#ffffff00']}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        style={[StyleSheet.absoluteFill, styles.linearGradient]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#EEE',
  },
  header: {
    backgroundColor: 'transparent',
  },
});
