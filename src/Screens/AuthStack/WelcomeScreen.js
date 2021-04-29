import React from 'react';
import welcomeImage from '../../Assets/Images/WelcomeScreenImage.png';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function WelcomeScreen({navigation}) {
  const GoLogin = () => {
    navigation.navigate('Login');
  };
  const GoSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.parent}>
      <Image
        style={styles.welcomeImage}
        width={250}
        height={250}
        source={welcomeImage}
      />
      <Text style={styles.greetingMessage}>
        Your guide to{'\n'}Kabupaten Bandung
      </Text>
      <View>
        <TouchableOpacity onPress={GoLogin} style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerWrapper}>
        <Text style={styles.registerText}>Belum punya akun?</Text>
        <TouchableOpacity onPress={GoSignUp}>
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
  },
  welcomeImage: {
    marginTop: 100,
    marginBottom: 25,
  },
  greetingMessage: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Pacifico-Regular',
    marginBottom: 100,
  },
  loginButton: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 100,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#652D92',
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
