import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const MediaRender = (props) => {
  const renderMovies = ({ item, index }) => (
    <View key={item.imdbID} style={{ flexDirection: 'row', padding: 10 }}>
      <View
        style={{
          //padding: 10,
          width: '47%',
        }}
      >
        {item.Poster == 'N/A' ? (
          <Image
            style={styles.img}
            source={require('../../assets/img_not_ava.png')}
            resizeMode="contain"
          />
        ) : (
          <Image style={styles.img} source={{ uri: item.Poster }} />
        )}
      </View>
      <View
        style={{
          //padding: 10,
          width: '50%',
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{ fontSize: 18, fontWeight: 'bold' }}
        >{`Title: ${item.Title}`}</Text>
        <Text
          style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}
        >{`Year: ${item.Year}`}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ marginBottom: 270 }}>
      <FlatList
        data={props.media}
        renderItem={renderMovies}
        horizontal={false}
        keyExtractor={(item) => item.imdbID}
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 5 }}
      />
    </View>
  );
};

export default MediaRender;

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 150,
  },
});
