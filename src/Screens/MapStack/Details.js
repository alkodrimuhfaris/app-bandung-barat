import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import selectDetail from '../../Helpers/selectDetail';
import DetailItems from '../../Components/DetailItems';
import Carousel from 'react-native-snap-carousel';

const {width, height} = Dimensions.get('screen');
const paddingCoef = 0.95;

export default function Details({navigation, route}) {
  const {id} = route.params;
  const isCarousel = React.useRef(null);
  const [details, setDetails] = React.useState({
    nearestVacationObj: [],
    nearestOtoRepair: [],
    photo: [],
  });
  React.useEffect(() => {
    if (!id) {
      let detail = selectDetail.selectDetail(0);
      setDetails(detail);
    } else {
      let detail = selectDetail.selectDetail(id);
      setDetails(detail);
    }
  }, [id]);
  React.useEffect(() => {
    navigation.setOptions({title: details.name});
  }, [details]);
  return Object.keys(details).length ? (
    <ScrollView style={styles.parent}>
      <View style={styles.carouselWrapper}>
        <Carousel
          layout="default"
          ref={isCarousel}
          data={details.photo}
          renderItem={({item}) => {
            return (
              <View style={styles.imageCarouselWrapper}>
                <Image
                  source={item}
                  width={height * 0.31}
                  height={height * 0.31}
                  style={styles.imageCarousel}
                />
              </View>
            );
          }}
          sliderWidth={width}
          itemWidth={270}
          inactiveSlideShift={0}
          useScrollView={true}
        />
      </View>
      <View style={styles.detailTextWrapper}>
        <Text style={styles.title}>{details.name}</Text>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemTitle}>Status lalu lintas</Text>
          <Text style={styles.itemText}>{details.trafficStatus}</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemTitle}>Deskripsi singkat</Text>
          <Text style={styles.itemText}>{details.description}</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemTitle}>Objek wisata terdekat</Text>
        </View>
        <FlatList
          data={details.nearestVacationObj}
          renderItem={({item}) => {
            return <DetailItems item={item} navigation={navigation} />;
          }}
          keyExtractor={(_, key) => key}
        />
        <View style={styles.itemWrapper}>
          <Text style={styles.itemTitle}>Bengkel terdekat</Text>
        </View>
        <FlatList
          data={details.nearestOtoRepair}
          renderItem={({item}) => {
            return <DetailItems item={item} navigation={navigation} />;
          }}
          keyExtractor={(_, key) => key}
        />
      </View>
    </ScrollView>
  ) : (
    <View style={styles.parent}>
      <Text>Nothing here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    // flex: 1,
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  carouselWrapper: {
    paddingVertical: 20,
    width: '100%',
    height: height * 0.35,
  },
  imageCarouselWrapper: {
    width: height * 0.31,
    height: height * 0.31,
    borderRadius: 15,
    elevation: 5,
  },
  imageCarousel: {
    width: height * 0.31,
    height: height * 0.31,
    borderRadius: 15,
  },
  detailTextWrapper: {
    width: width * paddingCoef,
    padding: (width * (1 - paddingCoef)) / 2,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  itemWrapper: {
    marginVertical: 10,
  },
  itemTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemText: {
    marginHorizontal: 5,
  },
});
