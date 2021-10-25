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

const Movies = () => {
  // https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative/

  const [movies, setMovies] = useState([]);
  const [response, setResponse] = useState();
  const [movieTitle, setMovieTitle] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchTxt, setSearchTxt] = useState('');

  //console.log(movies);

  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
      params: { s: `${searchTxt}`, r: 'json', type: 'movie', page: '10' },
      headers: {
        'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
        'x-rapidapi-key': 'c680d2ddabmsh84d9167c6748786p1f401fjsn82c5cb17e43b',
      },
    };

    const getMovies = async () => {
      setLoading(true);
      try {
        await axios
          .request(options)
          .then((res) => {
            setResponse(res.data.Response);
            setMovies(res.data.Search);
          })
          .catch((error) => {
            console.error(error);
          });
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();

    return () => {
      setMovies();
      setLoading();
    };
  }, [movieTitle]);

  if (loading) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  const handleSearchMovies = () => {
    if (movieTitle) {
      setMovieTitle(false);
    } else if (movieTitle === false) {
      setMovieTitle(true);
    }
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.txtInput}
          name="searchTxt"
          value={searchTxt}
          placeholder="Search for a Movie..."
          onChangeText={(text) => setSearchTxt(text)}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.viewOpacityBtn}
          onPress={() => handleSearchMovies()}
        >
          <Text style={styles.txtBtn}>Search</Text>
        </TouchableOpacity>
      </View>

      {response && movies ? (
        <MediaRender media={movies} />
      ) : (
        <Text>Please enter a valid Movie Title</Text>
      )}
    </View>
  );
};

export default Movies;

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
