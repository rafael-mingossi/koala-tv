import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

//Screens
import Header from './Shared/Header';

//Navigators
import MainNavigator from './Navigators/MainNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <MainNavigator />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}
