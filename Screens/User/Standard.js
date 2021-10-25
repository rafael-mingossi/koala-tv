import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Standard = () => {
  return (
    <View style={styles.outView}>
      <View style={{ alignItems: 'center' }}>
        <View style={[styles.viewTxtPackages, { backgroundColor: '#8284fa' }]}>
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
          <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'white' }}>
            $15.99
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Standard;

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
