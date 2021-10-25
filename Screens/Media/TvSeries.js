import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

import MediaRender from './MediaRender';
const TvSeries = () => {
  const [series, setSeries] = useState([]);
  const [response, setResponse] = useState('');
  const [seriesTitle, setSeriesTitle] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchTxt, setSearchTxt] = useState('');

  //console.log(response);

  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
      params: { s: `${searchTxt}`, r: 'json', type: 'series', page: '10' },
      headers: {
        'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
        'x-rapidapi-key': 'c680d2ddabmsh84d9167c6748786p1f401fjsn82c5cb17e43b',
      },
    };

    const getSeries = async () => {
      setLoading(true);
      try {
        await axios
          .request(options)
          .then((res) => {
            setResponse(res.data.Response);
            setSeries(res.data.Search);
          })
          .catch((error) => {
            console.error(error);
          });
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getSeries();

    return () => {
      setSeries();
      setLoading();
      setResponse();
    };
  }, [seriesTitle]);

  if (loading) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  const handleSearchSeries = () => {
    if (seriesTitle) {
      setSeriesTitle(false);
    } else if (seriesTitle === false) {
      setSeriesTitle(true);
    }
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.txtInput}
          name="searchTxt"
          value={searchTxt}
          placeholder="Search for a TV Series..."
          onChangeText={(text) => setSearchTxt(text)}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.viewOpacityBtn}
          onPress={() => handleSearchSeries()}
        >
          <Text style={styles.txtBtn}>Search</Text>
        </TouchableOpacity>
      </View>

      {response && series ? (
        <MediaRender media={series} />
      ) : (
        <Text>Please enter a valid TV Series Title</Text>
      )}
    </View>
  );
};

export default TvSeries;

const styles = StyleSheet.create({
  spinner: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtInput: {
    backgroundColor: 'white',
    width: '85%',
    height: 45,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  viewInput: {
    width: '100%',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'center',
  },
  viewOpacityBtn: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#a8acaf',
    borderRadius: 10,
    width: 120,
    height: 38,
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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    height: 200,
    width: 150,
  },
});
