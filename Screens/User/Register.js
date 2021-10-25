import React, { useState } from 'react';
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

const Register = ({ navigation }) => {
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedFirstName, setIsFocusedFirstName] = useState(false);

  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [registerFirstName, setRegisterFirstName] = useState();

  const saveValues = async () => {
    try {
      await AsyncStorage.setItem('email', user);
      await AsyncStorage.setItem('password', password);
      await AsyncStorage.setItem('name', registerFirstName);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={150}
      enableOnAndroid={true}
    >
      <View style={styles.viewMain}>
        <View style={styles.viewLoginPassword}>
          <TextInput
            name={'registerFirstName'}
            placeholder="First Name"
            style={
              isFocusedFirstName ? styles.inputFocused : styles.inputNotFocused
            }
            value={registerFirstName}
            onFocus={() => setIsFocusedFirstName(true)}
            onBlur={() => setIsFocusedFirstName(false)}
            onChangeText={(text) => setRegisterFirstName(text)}
          />

          <TextInput
            name={'user'}
            placeholder="Email"
            style={
              isFocusedLogin ? styles.inputFocused : styles.inputNotFocused
            }
            value={user}
            keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setIsFocusedLogin(true)}
            onBlur={() => setIsFocusedLogin(false)}
            onChangeText={(text) => setUser(text)}
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
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ fontSize: 15 }}>Click here to Sign In!</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.viewBtnLogin}
            onPress={() => {
              [
                Toast.show({
                  topOffset: 60,
                  type: 'success',
                  text1: 'Registered Successfully!',
                  text2: 'Log In to conitnue!',
                }),
                saveValues(),
                setTimeout(() => {
                  navigation.navigate('Login');
                }, 600),
              ];
            }}
          >
            <Text style={styles.txtBtnLogin}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  viewMain: {
    width: '98%',
    marginTop: 20,
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
    marginTop: 20,
  },
  inputNotFocused: {
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderColor: '#5c4b4d',
    width: '90%',
    height: 50,
    fontSize: 16,
    marginTop: 20,
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
