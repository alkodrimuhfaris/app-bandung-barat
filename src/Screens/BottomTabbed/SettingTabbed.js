import React from 'react';
import {View, Dimensions, Image, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import profilePicture from '../../Assets/Images/profile-picture.png';

const {width, height} = Dimensions.get('screen');
const paddingCoef = 0.97;

const menuItem = [
  {
    name: 'Logout',
  },
  {
    name: 'Help',
  },
];

export default function SettingTabbed({navigation}) {
  const name = 'Alkodri Muhammad Faros';
  const goProfile = () => {
    navigation.navigate('ProfileStack', {screen: 'Profile'});
  };
  return (
    <View style={styles.parent}>
      <View style={styles.mainWrapper}>
        <View style={styles.profileWrapper}>
          <View style={styles.profilePicWrapper}>
            <Image
              style={styles.profilePicture}
              source={profilePicture}
              width={75}
              height={75}
            />
          </View>
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity onPress={goProfile} style={styles.changeProfile}>
              <Text style={styles.changeProfileText}>Ubah profil </Text>
              <Icon
                type="FontAwesome5"
                name="chevron-right"
                style={styles.changeProfileText}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          {menuItem.map(val => {
            return (
              <TouchableOpacity style={styles.menuBottom}>
                <Text>{val.name}</Text>
                <Icon
                  type="FontAwesome5"
                  name="chevron-right"
                  style={styles.menuText}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  mainWrapper: {
    width: width * paddingCoef,
    padding: (width * (1 - paddingCoef)) / 2,
  },
  profileWrapper: {
    marginVertical: 25,
    width: '80%',
    flexDirection: 'row',
  },
  profilePicWrapper: {
    width: 75,
    marginRight: 10,
    height: 75,
    borderRadius: 300,
    overflow: 'hidden',
  },
  profilePicture: {
    width: 75,
    height: 75,
  },
  nameWrapper: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  changeProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeProfileText: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  menuWrapper: {},
  menuBottom: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: '#652D92',
    justifyContent: 'space-between',
  },
  menuText: {
    fontSize: 14,
    color: '#652D92',
  },
});
