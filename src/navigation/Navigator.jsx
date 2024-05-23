import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeStackNavigator from './HomeStackNavigator'
import BottomTabNavigatorEmployee from './BottomTabNavigatorEmployee'

const Stack = createNativeStackNavigator()
const Navigator = () => {

  return (
    <NavigationContainer>
      <HomeStackNavigator/>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})