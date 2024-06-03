import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeTabs from './HomeTabsNavigator'
import { Employee, Employer, LoginScreen } from '../screens/indexScreens'

const Stack = createNativeStackNavigator()
const Navigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen InitialRouteName="Hometabs" name="Hometabs" component={HomeTabs} />
        <Stack.Screen name="Employee" component={Employee} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Employer" component={Employer} options={{
          headerShown: false
        }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})