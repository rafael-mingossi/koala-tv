import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Premium = () => {
  return (
    <View style={styles.outView}>
      <View style={{ alignItems: 'center' }}>
        <View style={[styles.viewTxtPackages, { backgroundColor: '#55f520' }]}>
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
          <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'white' }}>
            $24.99
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Premium;

const styles = StyleSheet.create({
  outView: {
    width: '55%',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 280,
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
});
