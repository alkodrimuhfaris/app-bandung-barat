import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import detailArr from '../../Helpers/detailArray';

export default function Details({navigation, route}) {
  const {id} = route.params;

  React.useEffect(() => {
    if (Number(id)) {
      const title = detailArr[1].name;
      navigation.setOptions({
        title,
      });
    }
  }, [id]);
  return (
    <View style={styles.parent}>
      <Text>{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
