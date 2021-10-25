import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import UserProfile from '../Screens/User/UserProfile';
import Login from '../Screens/User/Login';
import Register from '../Screens/User/Register';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

function MyStack() {
  const [isLogged, setIsLogged] = useState();

  useEffect(() => {
    const getLog = async () => {
      try {
        await AsyncStorage.getItem('log')
          .then((res) => {
            //console.log(res);
            setIsLogged(res);
          })
          .catch((error) => console.log(error));
      } catch (err) {
        console.error(err);
      }
    };
    getLog();
  }, []);

  return (
    <Stack.Navigator initialRouteName={isLogged ? 'UserProfile' : 'Login'}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function UserNavigator() {
  return <MyStack />;
}
