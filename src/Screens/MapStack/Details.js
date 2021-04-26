import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import detailArray from '../../Helpers/detailArray';
import detailArr from '../../Helpers/detailArray';

const {width, height} = Dimensions.get('screen');
const paddingCoef = 0.97;

export default function Details({navigation, route}) {
  const {id} = route.params;
  const [details, setDetails] = React.useState({});
  React.useEffect(() => {
    if (Number(id)) {
      const index = Number(id);
      setDetails(detailArray[index]);
      const title = detailArr[index].name;
      navigation.setOptions({
        title,
      });
    }
  }, [id]);
  return Object.entries(details).length ? (
    <View style={styles.parent}>
      <View style={styles.carouselWrapper}>
        <Text>This is carouselWrapper</Text>
      </View>
      <View style={styles.detailTextWrapper}>
        <Text style={styles.title}>{details.name}</Text>
      </View>
    </View>
  ) : (
    <View style={styles.parent}>
      <Text>Nothing here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  carouselWrapper: {
    width: '100%',
    height: height * 0.35,
    backgroundColor: 'red',
  },
  detailTextWrapper: {
    width: width * paddingCoef,
    padding: (width * (1 - paddingCoef)) / 2,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});
