import React from 'react';
import { StyleSheet, Image, SafeAreaView } from 'react-native';

import Constant from 'expo-constants';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        source={require('../assets/koala_logo.png')}
        resizeMode="contain"
        style={{ height: 60 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constant.statusBarHeight,
    marginBottom: 10,
  },
});

export default Header;
