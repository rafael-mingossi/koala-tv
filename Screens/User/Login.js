import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const Login = ({ navigation }) => {
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [emailAsync, setEmailAsync] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAsync, setPasswordAsync] = useState('');

  useEffect(() => {
    navigation.addListener('focus', async () => {
      try {
        await AsyncStorage.getItem('email')
          .then((res) => {
            //console.log(res);
            setEmailAsync(res);
          })
          .catch((error) => console.log(error));
      } catch (err) {
        console.error(err);
      }
    });

    navigation.addListener('focus', async () => {
      try {
        await AsyncStorage.getItem('password')
          .then((res) => {
            //console.log(res);
            setPasswordAsync(res);
          })
          .catch((error) => console.log(error));
      } catch (err) {
        console.error(err);
      }
    });

    navigation.addListener('focus', async () => {
      try {
        await AsyncStorage.getItem('log')
          .then((res) => {
            if (res === 'isLoggedIn') {
              navigation.navigate('UserProfile');
            }
          })
          .catch((error) => console.log(error));
      } catch (err) {
        console.error(err);
      }
    });

    return () => {
      setEmailAsync();
      setPasswordAsync();
    };
  }, [navigation]);

  const logUserIn = async () => {
    try {
      await AsyncStorage.setItem('log', 'isLoggedIn');
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = () => {
    if (email === emailAsync && password === passwordAsync) {
      [
        Toast.show({
          topOffset: 60,
          type: 'success',
          text1: 'Logged In Successfully!',
          text2: 'Navigating to User Profile',
        }),
        logUserIn(),
        setTimeout(() => {
          navigation.navigate('UserProfile');
        }, 600),
      ];
    } else {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Wrong credentials!',
        text2: 'Please try again!',
      });
    }
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={170}
      enableOnAndroid={true}
    >
      <View style={styles.viewMain}>
        <View style={styles.viewLoginPassword}>
          <TextInput
            name={'email'}
            placeholder="Email"
            style={
              isFocusedLogin ? styles.inputFocused : styles.inputNotFocused
            }
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setIsFocusedLogin(true)}
            onBlur={() => setIsFocusedLogin(false)}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            name={'password'}
            placeholder="Password"
            style={
              isFocusedPassword ? styles.inputFocused : styles.inputNotFocused
            }
            value={password}
            secureTextEntry={true}
            autoCapitalize="none"
            onFocus={() => setIsFocusedPassword(true)}
            onBlur={() => setIsFocusedPassword(false)}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={{ padding: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ fontSize: 15 }}>
              Not register yet? Click here to Sign Up!
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.viewBtnLogin}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.txtBtnLogin}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  viewMain: {
    width: '98%',
    marginTop: 100,
    alignItems: 'center',
  },
  viewLoginPassword: {
    padding: 30,
    width: '100%',
    alignItems: 'center',
  },
  inputFocused: {
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 2,
    borderColor: '#e3e324',
    width: '90%',
    height: 50,
    fontSize: 16,
    marginTop: 30,
  },
  inputNotFocused: {
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderColor: '#5c4b4d',
    width: '90%',
    height: 50,
    fontSize: 16,
    marginTop: 30,
  },
  viewBtnLogin: {
    padding: 10,
    marginTop: 20,
    backgroundColor: '#58585d',
    borderRadius: 10,
    width: 120,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
    justifyContent: 'center',
  },
  txtBtnLogin: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f2f2f2',
  },
});
