import {Icon, Form, Item, Input, Label} from 'native-base';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import profilePicture from '../../Assets/Images/profile-picture.png';

const {width, height} = Dimensions.get('screen');
const paddingCoef = 0.97;

export default function Profile() {
  const [seenPassOld, setSeenPassOld] = React.useState(false);
  const [seenPass, setSeenPass] = React.useState(false);

  const initialValue = {
    name: 'Alkodri Muh Faris',
    email: 'farisalkodri@gmail.com',
    telpon: '089633449007',
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.parent}>
      <View style={styles.mainWrapper}>
        <TouchableOpacity style={styles.profilePhotoWrapper}>
          <Image
            source={profilePicture}
            width={100}
            height={100}
            style={styles.profilePhoto}
          />
          <View style={styles.photoIcon}>
            <Icon type="FontAwesome5" name="camera" style={styles.cameraIcon} />
          </View>
        </TouchableOpacity>
        <Form style={styles.formWrapper}>
          <Text style={styles.titleText}>General</Text>
          <View>
            <Item floatingLabel>
              <Label style={styles.floatingLabel}>Nama Lengkap</Label>
              <Input color="#652D92" value={initialValue.name} />
            </Item>
          </View>
          <View>
            <Item floatingLabel>
              <Label style={styles.floatingLabel}>Email</Label>
              <Input
                color="#652D92"
                textContentType="emailAddress"
                keyboardType="email-address"
                value={initialValue.email}
              />
            </Item>
          </View>
          <View>
            <Item floatingLabel>
              <Label style={styles.floatingLabel}>Nomor Telepon</Label>
              <Input
                color="#652D92"
                textContentType="telephoneNumber"
                keyboardType="number-pad"
                value={initialValue.telpon}
              />
            </Item>
          </View>
          <View style={styles.buttonSaveWrapper}>
            <TouchableOpacity style={styles.buttonSave}>
              <Text style={styles.buttonText}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Form>
        <Form style={styles.formWrapper}>
          <Text style={styles.titleText}>Password</Text>
          <View style={styles.passwordWrapper}>
            <Item floatingLabel>
              <Label style={styles.floatingLabel}>Password Lama</Label>
              <Input secureTextEntry={!seenPassOld} />
            </Item>
            <TouchableOpacity
              onPress={() => setSeenPassOld(before => !before)}
              style={styles.seePassword}>
              <Icon
                type="FontAwesome5"
                name="eye"
                style={seenPassOld ? styles.seen : styles.unSeen}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.passwordWrapper}>
            <Item floatingLabel>
              <Label style={styles.floatingLabel}>Password Baru</Label>
              <Input secureTextEntry={!seenPass} />
            </Item>
            <TouchableOpacity
              onPress={() => setSeenPass(before => !before)}
              style={styles.seePassword}>
              <Icon
                type="FontAwesome5"
                name="eye"
                style={seenPass ? styles.seen : styles.unSeen}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSaveWrapper}>
            <TouchableOpacity style={styles.buttonSave}>
              <Text style={styles.buttonText}>Simpan Password</Text>
            </TouchableOpacity>
          </View>
        </Form>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainWrapper: {
    alignItems: 'center',
    width: width * paddingCoef,
    padding: (width * (1 - paddingCoef)) / 2,
  },
  profilePhotoWrapper: {
    marginTop: 20,
    width: 110,
    height: 110,
    borderRadius: 300,
    borderColor: '#FFC300',
    borderWidth: 5,
    position: 'relative',
    overflow: 'hidden',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 300,
  },
  photoIcon: {
    height: '25%',
    width: '100%',
    backgroundColor: '#111',
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  cameraIcon: {
    fontSize: 14,
    color: 'white',
  },
  formWrapper: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 20,
    paddingBottom: 30,
    backgroundColor: 'white',
    marginVertical: 20,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 18,
    color: '#652D92',
    fontWeight: 'bold',
  },
  floatingLabel: {
    color: '#652D92',
  },
  passwordWrapper: {
    position: 'relative',
    width: '100%',
    overflow: 'visible',
  },
  seePassword: {
    position: 'absolute',
    bottom: 5,
    right: 2,
  },
  unSeen: {
    color: '#C4C4C4',
    fontSize: 20,
  },
  seen: {
    color: '#FFC300',
    fontSize: 20,
  },
  buttonSaveWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSave: {
    marginVertical: 20,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 100,
    backgroundColor: '#652D92',
  },
  buttonText: {
    color: 'white',
  },
});
