import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

export default function DetailItems({item, navigation}) {
  // const navigation = useNavigation();
  const goToDetails = id => {
    navigation.navigate('MapStack', {
      screen: 'Detail',
      params: {id},
    });
  };
  // const [id, setId] = React.useState(0);
  return (
    <View key={item.id} style={detailStyle.parent}>
      <TouchableOpacity
        onPress={() => goToDetails(item.id)}
        style={detailStyle.wrapper}>
        <View style={detailStyle.imageWrapper}>
          <Image
            source={item.image}
            width={150}
            height={150}
            style={detailStyle.image}
          />
        </View>
        <View style={detailStyle.nameWrapper}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={detailStyle.nameText}>
            {item.name}
          </Text>
        </View>
        <View style={detailStyle.textDetailWrapper}>
          <Text style={detailStyle.textDetail}>Detail</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const detailStyle = StyleSheet.create({
  parent: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  wrapper: {
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
    width: '100%',
    height: 75,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  imageWrapper: {
    backgroundColor: '#CCC',
    width: '30%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  nameWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '50%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  nameText: {
    fontSize: 16,
    color: '#222',
    fontWeight: 'bold',
  },
  textDetailWrapper: {
    padding: 7,
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textDetail: {
    color: 'grey',
    fontSize: 14,
  },
});
