import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import detailArr from '../../Helpers/detailArray';

const {height} = Dimensions.get('screen');

export default function MapTabbed({navigation}) {
  const goToDetails = id => {
    navigation.navigate('MapStack', {
      screen: 'Detail',
      params: {id},
    });
  };
  return (
    <View style={styles.parent}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -6.8410587852543765,
          longitude: 107.51239239738976,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.searchBox}>
        <Text>This is search box</Text>
      </View>
      <View style={styles.searchContainer}>
        {detailArr.map((val, key) => {
          return (
            <TouchableOpacity key={key} onPress={() => goToDetails(val.id)}>
              <Text>This is detail box</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    position: 'relative',
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchContainer: {
    position: 'absolute',
    top: height * 0.1,
    height: '90%',
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  searchBox: {
    backgroundColor: 'white',
  },
});
