import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeStackNavigator from './HomeStackNavigator'
import BottomTabNavigatorEmployee from './BottomTabNavigatorEmployee'
import Home from '../screens/Home'
import Employer from '../screens/Employer'
import Employee from '../screens/Employee'
import HomeTabs from './HomeStackNavigator'
const Stack = createNativeStackNavigator()
const Navigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Hometabs" component={HomeTabs} />
        <Stack.Screen name="Employee" component={Employee} />
        <Stack.Screen name="Employer" component={Employer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})