import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon, Form, Item, Input, Label} from 'native-base';

const {width} = Dimensions.get('screen');

export default function Login({navigation}) {
  const [seenPass, setSeenPass] = React.useState(false);
  const doLogin = () => {
    navigation.navigate('HomeScreen', {screen: 'Home'});
  };
  const doRegister = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.parent}>
      <Text style={styles.title}>Login</Text>
      <Form style={styles.formWrapper}>
        <View>
          <Item floatingLabel>
            <Label style={styles.floatingLabel}>Username</Label>
            <Input color="#652D92" />
          </Item>
        </View>
        <View style={styles.passwordWrapper}>
          <Item floatingLabel>
            <Label style={styles.floatingLabel}>Password</Label>
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
      </Form>
      <View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText} onPress={doLogin}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerWrapper}>
        <Text style={styles.registerText}>Belum punya akun?</Text>
        <TouchableOpacity onPress={doRegister}>
          <Text style={styles.registerLink}> Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#652D92',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 25,
    color: 'white',
    fontSize: 50,
  },
  formWrapper: {
    width: width * 0.8,
    paddingLeft: 10,
    paddingRight: 20,
    paddingBottom: 30,
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
  },
  floatingLabel: {
    color: '#652D92',
  },
  passwordWrapper: {
    position: 'relative',
  },
  seePassword: {
    position: 'absolute',
    bottom: 2,
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
  loginButton: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 100,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  registerWrapper: {
    flexDirection: 'row',
  },
  registerText: {
    color: 'white',
  },
  registerLink: {
    color: '#FFC300',
  },
});
