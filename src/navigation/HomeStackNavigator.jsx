import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home, SignupScreen } from '../screens/indexScreens.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Profile from '../screens/Profile.jsx'
import { JobItem, JobsList, JobsListByCategories } from '../component/indexComponent.js'
import JobsListCategories from '../screens/JobsListCategories.jsx'

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="SignUpScreen" component={SignupScreen} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="jobsList" component={JobsList}/>
      <Tab.Screen name="jobsListCategories" component={JobsListCategories}/>
      <Tab.Screen name="jobItem" component={JobItem}/>
    </Tab.Navigator>
  );
}

export default HomeTabs;
