import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Plans from '../Screens/Plans/Plans';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Plans"
        component={Plans}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function PlansNavigator() {
  return <MyStack />;
}
