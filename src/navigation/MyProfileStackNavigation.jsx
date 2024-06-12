import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { MyProfile, ImageSelector} from '../screens/indexScreens'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack= createNativeStackNavigator()
const MyProfileStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen component={MyProfile} name="My Profile Stack" />
        <Stack.Screen component={ImageSelector} name="Image selector" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyProfileStackNavigation

