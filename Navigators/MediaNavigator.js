import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Medias from '../Screens/Media/Medias';
import MoviesComp from '../Screens/Media/Movies';
import TvSeriesComp from '../Screens/Media/TvSeries';
import EpisodesComp from '../Screens/Media/Episodes';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Medias"
        component={Medias}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Movies"
        component={MoviesComp}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="TvSeries"
        component={TvSeriesComp}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Episodes"
        component={EpisodesComp}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default function MediaNavigator() {
  return <MyStack />;
}
