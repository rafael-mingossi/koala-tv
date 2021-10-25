import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Abouts from '../Screens/About/Abouts';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Abouts"
        component={Abouts}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function AboutNavigator() {
  return <MyStack />;
}
