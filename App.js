import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import Main from './src/Screens/Main';
import RNBootSplash from 'react-native-bootsplash';

export default function App() {
  React.useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar backgroundColor="#652D92" />
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
});
