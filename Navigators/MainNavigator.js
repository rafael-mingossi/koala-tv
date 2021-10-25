import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';

//Stacks
import AboutNavigator from './AboutNavigator';
import MediaNavigator from './MediaNavigator';
import PlansNavigator from './PlansNavigator';
import UserNavigator from './UserNavigator';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="About"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="About"
        component={AboutNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Media"
        component={MediaNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="file-video-o" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Subscriptions"
        component={PlansNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="file-invoice-dollar" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User Profile"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
