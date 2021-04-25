import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Main from './src/Screens/Main';

export default function App() {
  return (
    <SafeAreaView style={styles.parent}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
});
