import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import HeaderTitle from '../../Shared/HeaderTitle';
import Premium from './Premium';
import Standard from './Standard';

import { MaterialIcons } from '@expo/vector-icons';

const UserProfile = ({ navigation }) => {
  const [name, setName] = useState();
  const [standard, setStandard] = useState();
  const [premium, setPremium] = useState();

  const handleLogoutUser = () => {
    AsyncStorage.removeItem('log');
  };

  const handleDeleteUser = () => {
    AsyncStorage.removeItem('log');
    AsyncStorage.removeItem('name');
    AsyncStorage.removeItem('email');
    AsyncStorage.removeItem('password');
    AsyncStorage.removeItem('standard');
    AsyncStorage.removeItem('premium');
  };

  useEffect(() => {
    navigation.addListener('focus', async () => {
      try {
        await AsyncStorage.getItem('name')
          .then((res) => {
            //console.log(res);
            setName(res);
          })
          .catch((error) => console.log(error));
      } catch (err) {
        console.error(err);
      }
    });

    navigation.addListener('focus', async () => {
      try {
        await AsyncStorage.getItem('standard')
          .then((res) => {
            //console.log(res);
            setStandard(res);
          })
          .catch((error) => console.log(error));
      } catch (err) {
        console.error(err);
      }
    });

    navigation.addListener('focus', async () => {
      try {
        await AsyncStorage.getItem('premium')
          .then((res) => {
            //console.log(res);
            setPremium(res);
          })
          .catch((error) => console.log(error));
      } catch (err) {
        console.error(err);
      }
    });

    return () => {
      setName();
    };
  }, [navigation]);

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: 'center', paddingBottom: 30 }}
    >
      <HeaderTitle title={'User Profile'} />
      <View style={styles.viewName}>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
          Welcome {name ? name : 'Guest'}
        </Text>
      </View>

      <View style={{ width: '100%', alignItems: 'center', marginBottom: 30 }}>
        <Text style={styles.txtMySubscription}>My Subscription:</Text>
        {standard === 'standard' ? <Standard /> : null}
        {premium === 'premium' ? <Premium /> : null}
        {standard !== 'standard' && premium !== 'premium' ? (
          <Text style={{ fontWeight: 'bold' }}>
            You don't have any subscriptions!
          </Text>
        ) : null}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
        }}
      >
        <TouchableOpacity
          style={[styles.viewBtnLogin, { width: 160 }]}
          onPress={() => {
            [
              Toast.show({
                topOffset: 60,
                type: 'success',
                text1: 'Account Deleted',
                text2: '',
              }),
              handleDeleteUser(),
              setTimeout(() => {
                navigation.navigate('Register');
              }, 600),
            ];
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <Text style={styles.txtBtnLogin}>Delete Account</Text>
            <MaterialIcons name="delete-forever" size={21} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewBtnLogin}
          onPress={() => {
            [
              Toast.show({
                topOffset: 60,
                type: 'success',
                text1: 'Logging Out',
                text2: '',
              }),
              handleLogoutUser(),
              setTimeout(() => {
                navigation.navigate('Login');
              }, 600),
            ];
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <Text style={styles.txtBtnLogin}>Log Out</Text>
            <MaterialIcons name="logout" size={19} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  viewBtnLogin: {
    padding: 5,
    marginTop: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 110,
    height: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 10,
    justifyContent: 'center',
  },
  txtBtnLogin: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f2f2f2',
  },
  viewName: {
    marginTop: 25,
    marginBottom: 15,
  },
  txtMySubscription: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
