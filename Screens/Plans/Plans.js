import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import HeaderTitle from '../../Shared/HeaderTitle';
import { Entypo } from '@expo/vector-icons';

const Plans = ({ navigation }) => {
  const [standard, setStandard] = useState();
  const [premium, setPremium] = useState();
  const [logged, setIsLogged] = useState();

  useEffect(() => {
    navigation.addListener('focus', async () => {
      try {
        await AsyncStorage.getItem('log')
          .then((res) => {
            setIsLogged(res);
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
      setStandard();
      setPremium();
    };
  }, [navigation]);

  const handleStandard = async () => {
    if (logged === 'isLoggedIn') {
      try {
        [
          await AsyncStorage.setItem('standard', 'standard'),
          Toast.show({
            topOffset: 60,
            type: 'success',
            text1: 'Standard Plan Selected',
            text2: '',
          }),
          setTimeout(() => {
            navigation.navigate('UserProfile');
          }, 300),
        ];
      } catch (e) {
        console.log(e);
      }
    } else {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Please Log In before selecting a plan',
        text2: '',
      });
    }
  };

  const handlePremium = async () => {
    if (logged === 'isLoggedIn') {
      try {
        [
          await AsyncStorage.setItem('premium', 'premium'),
          Toast.show({
            topOffset: 60,
            type: 'success',
            text1: 'Premium Plan Selected',
            text2: '',
          }),
          setTimeout(() => {
            navigation.navigate('UserProfile');
          }, 300),
        ];
      } catch (e) {
        console.log(e);
      }
    } else {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Please Log In before selecting a plan',
        text2: '',
      });
    }
  };

  return (
    <View>
      <HeaderTitle title={'Subscriptions'} />
      <View>
        <Text style={styles.txtHeader}>
          Choose between one of our plans below and enjoy the most of Koala TV!
        </Text>
      </View>
      <View style={styles.mainViewPackages}>
        {/* Standard View */}
        <View style={styles.outView}>
          <View style={{ alignItems: 'center' }}>
            <View
              style={[styles.viewTxtPackages, { backgroundColor: '#8284fa' }]}
            >
              <Text style={styles.txtPackages}>STANDARD</Text>
            </View>

            <View style={styles.viewDetailsPackages}>
              <Entypo name="check" size={20} color="#8284fa" />
              <Text style={{ fontSize: 16 }}>Not All Movie</Text>
            </View>
            <View style={styles.viewDetailsPackages}>
              <Entypo name="check" size={20} color="#8284fa" />
              <Text style={{ fontSize: 16 }}>Local TV Series</Text>
            </View>
            <View style={styles.viewDetailsPackages}>
              <Entypo name="check" size={20} color="#8284fa" />
              <Text style={{ fontSize: 16 }}>Old Episodes</Text>
            </View>
            <View style={styles.viewDetailsPackages}>
              <Entypo name="check" size={20} color="#8284fa" />
              <Text style={{ fontSize: 16 }}>Support 24/7</Text>
            </View>
            <View style={[styles.viewPrice, { backgroundColor: '#8284fa' }]}>
              <Text
                style={{ fontSize: 23, fontWeight: 'bold', color: 'white' }}
              >
                $15.99
              </Text>
            </View>
            {standard === 'standard' && premium !== 'premium' ? (
              <View
                style={[styles.viewSelected, { backgroundColor: '#8284fa' }]}
              >
                <Text
                  style={{ color: 'white', fontSize: 21, fontWeight: 'bold' }}
                >
                  Selected
                </Text>
                <Entypo name="check" size={25} color="white" />
              </View>
            ) : null}
            {standard !== 'standard' && premium !== 'premium' ? (
              <View>
                <TouchableOpacity
                  style={[styles.viewBtnBuy, { backgroundColor: '#8284fa' }]}
                  onPress={() => {
                    handleStandard();
                  }}
                >
                  <Text
                    style={{
                      fontSize: 19,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    BUY NOW
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
            {standard !== 'standard' && premium === 'premium' ? (
              <View style={styles.viewNotAvailable}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Not Available
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        {/* Premium View */}
        <View style={styles.outView}>
          <View style={{ alignItems: 'center' }}>
            <View
              style={[styles.viewTxtPackages, { backgroundColor: '#55f520' }]}
            >
              <Text style={styles.txtPackages}>PREMIUM</Text>
            </View>

            <View style={styles.viewDetailsPackages}>
              <Entypo name="check" size={20} color="#55f520" />
              <Text style={{ fontSize: 16 }}>All Movie</Text>
            </View>
            <View style={styles.viewDetailsPackages}>
              <Entypo name="check" size={20} color="#55f520" />
              <Text style={{ fontSize: 16 }}>All TV Series</Text>
            </View>
            <View style={styles.viewDetailsPackages}>
              <Entypo name="check" size={20} color="#55f520" />
              <Text style={{ fontSize: 16 }}>All Episodes</Text>
            </View>
            <View style={styles.viewDetailsPackages}>
              <Entypo name="check" size={20} color="#55f520" />
              <Text style={{ fontSize: 16 }}>Support 24/7</Text>
            </View>
            <View style={[styles.viewPrice, { backgroundColor: '#55f520' }]}>
              <Text
                style={{ fontSize: 23, fontWeight: 'bold', color: 'white' }}
              >
                $24.99
              </Text>
            </View>
            {premium === 'premium' ? (
              <View
                style={[styles.viewSelected, { backgroundColor: '#55f520' }]}
              >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 21,
                    fontWeight: 'bold',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  Selected
                </Text>
                <Entypo name="check" size={25} color="white" />
              </View>
            ) : null}
            {standard !== 'standard' && premium !== 'premium' ? (
              <View>
                <TouchableOpacity
                  style={[styles.viewBtnBuy, { backgroundColor: '#55f520' }]}
                  onPress={() => {
                    handlePremium();
                  }}
                >
                  <Text
                    style={{
                      fontSize: 19,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    BUY NOW
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
            {standard === 'standard' && premium !== 'premium' ? (
              <View style={styles.viewNotAvailable}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Not Available
                </Text>
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Plans;

const styles = StyleSheet.create({
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    marginTop: 18,
    marginBottom: 18,
  },
  mainViewPackages: {
    width: '97%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  outView: {
    width: '45%',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 340,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },
  viewTxtPackages: {
    borderRadius: 10,
    width: '100%',
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 10,
  },
  txtPackages: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  viewDetailsPackages: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15,
  },
  viewPrice: {
    marginTop: 20,
    width: 100,
    height: 50,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBtnBuy: {
    padding: 5,
    marginTop: 25,
    borderRadius: 10,
    width: 120,
    height: 30,
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
  viewSelected: {
    padding: 5,
    marginTop: 25,
    borderRadius: 10,
    width: 125,
    height: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  viewNotAvailable: {
    padding: 5,
    marginTop: 25,
    borderRadius: 10,
    width: 120,
    height: 30,
    backgroundColor: '#b8b7b6',
  },
});
