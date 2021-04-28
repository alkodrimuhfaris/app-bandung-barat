import React from 'react';
import {Item, Input, Form, Icon} from 'native-base';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import DetailItems from '../../Components/DetailItems';
import {ScrollView} from 'react-native-gesture-handler';
import selectDetail from '../../Helpers/selectDetail';

const {height, width} = Dimensions.get('screen');

export default function MapTabbed({navigation}) {
  const [search, setSearch] = React.useState('');
  const [doSearch, setDoSearch] = React.useState(false);
  const heightSearch = {
    top: doSearch ? height * 0.1 : height * 0.79,
  };
  React.useEffect(() => {
    if (search && !doSearch) {
      setDoSearch(true);
    }
  }, [search]);

  return (
    <View style={styles.parent}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -6.8410587852543765,
          longitude: 107.51239239738976,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {selectDetail.detailArray.map((val, key) => {
          return (
            <Marker
              key={key}
              coordinate={val.coordinate}
              icon={() => (
                <Icon
                  type="FontAwesome5"
                  name="map-marker-alt"
                  style={styles.pin}
                />
              )}
              title={val.name}>
              <Callout style={styles.calloutWrapper}>
                <Text style={styles.calloutText}>{val.name}</Text>
                <View style={styles.imageMarkerWrapper}>
                  <Image
                    width={150}
                    height={75}
                    style={styles.imageMarker}
                    source={val.image}
                  />
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
      <Form style={styles.formSearch}>
        <View style={styles.searchBoxContainer}>
          <Item style={styles.searchBox} regular>
            <Input
              value={search}
              onChangeText={e => setSearch(e)}
              placeholder="Cari di sini"
            />
          </Item>
          <TouchableOpacity
            onPress={() => {
              if (search) {
                setSearch('');
              }
            }}
            style={styles.searchIconWrapper}>
            {search ? (
              <Icon
                type="FontAwesome5"
                name="times-circle"
                style={styles.deleteIcon}
              />
            ) : (
              <Icon
                type="FontAwesome5"
                name="search"
                style={styles.searchIcon}
              />
            )}
          </TouchableOpacity>
        </View>
      </Form>
      <View style={[styles.searchContainer, heightSearch]}>
        <TouchableOpacity onPress={() => setDoSearch(val => !val)}>
          <Icon
            type="FontAwesome5"
            name={doSearch ? 'chevron-down' : 'chevron-up'}
            style={styles.upDown}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          {search ? (
            <Text style={styles.searchText}>Mencari: {search}</Text>
          ) : (
            <Text style={styles.searchText}>Cari di sini</Text>
          )}
        </View>
        <FlatList
          data={selectDetail.detailArray}
          renderItem={({item}) => {
            return <DetailItems item={item} navigation={navigation} />;
          }}
          keyExtractor={(_, key) => key}
        />
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
  calloutText: {
    fontWeight: 'bold',
  },
  calloutWrapper: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    borderRadius: 6,
    backgroundColor: '#FFF',
    height: 75,
    width: 150,
  },
  imageMarkerWrapper: {
    width: 150,
    height: 75,
    borderRadius: 10,
  },
  imageMarker: {
    width: 150,
    height: 75,
    borderRadius: 10,
  },
  searchContainer: {
    position: 'absolute',
    height: height / 0.8,
    width: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  searchBoxWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  formSearch: {
    position: 'absolute',
    top: 20,
    paddingHorizontal: 30,
    width: width,
    backgroundColor: 'transparent',
  },
  searchBox: {
    borderRadius: 300,
    borderColor: '#652D92',
    position: 'relative',
    backgroundColor: 'white',
  },
  searchTextWrapper: {
    width: '100%',
    padding: 20,
    color: 'white',
  },
  searchText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchWrapper: {
    marginVertical: 10,
    width: '95%',
  },
  searchBoxContainer: {
    position: 'relative',
  },
  searchIconWrapper: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  searchIcon: {
    color: '#652D92',
    fontSize: 20,
  },
  deleteIcon: {
    color: '#FFC300',
    fontSize: 20,
  },
  upDown: {
    color: '#FFC300',
    fontSize: 30,
  },
  pin: {
    color: '#FFC300',
    fontSize: 30,
  },
});
