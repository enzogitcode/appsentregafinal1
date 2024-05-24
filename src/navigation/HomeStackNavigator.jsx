import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home, Employee, Employer } from '../screens/indexScreens.js'
import BottomTabNavigatorEmployee from './BottomTabNavigatorEmployee.jsx'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Profile from '../component/AuthComponents/Profile.jsx'

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
