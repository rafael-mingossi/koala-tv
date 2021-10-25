import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import HeaderTitle from '../../Shared/HeaderTitle';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Medias = ({ navigation }) => {
  // https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative/

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <HeaderTitle title={'Media'} />
      <View style={{ width: '90%' }}>
        <Text style={styles.txtHeader}>
          In our Media Section, you can choose between the options below and
          check which titles are available!
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.viewOpacityBtn}
          onPress={() => navigation.navigate('Movies')}
        >
          <View style={styles.viewBtnIcons}>
            <MaterialCommunityIcons
              name="video-vintage"
              size={26}
              color="black"
            />
            <Text style={styles.txtBtn}>Movies</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewOpacityBtn}
          onPress={() => navigation.navigate('TvSeries')}
        >
          <View style={styles.viewBtnIcons}>
            <MaterialCommunityIcons
              name="television-classic"
              size={26}
              color="black"
            />
            <Text style={styles.txtBtn}>Tv Series</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewOpacityBtn}
          onPress={() => navigation.navigate('Episodes')}
        >
          <View style={styles.viewBtnIcons}>
            <MaterialIcons name="local-movies" size={26} color="black" />
            <Text style={styles.txtBtn}>Episodes</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Medias;

const styles = StyleSheet.create({
  spinner: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewOpacityBtn: {
    padding: 10,
    marginTop: 30,
    backgroundColor: '#a8acaf',
    borderRadius: 10,
    width: 160,
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
  txtBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  viewBtnIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
