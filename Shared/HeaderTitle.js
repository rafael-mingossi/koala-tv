import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderTitle = (props) => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.txtHeader}>{props.title}</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  mainView: {
    top: 0,
    backgroundColor: '#58585d',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  txtHeader: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
