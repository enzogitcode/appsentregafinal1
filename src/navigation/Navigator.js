import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Employee, Employer } from '../screens/indexScreens.js'

const Stack = createNativeStackNavigator()
const Navigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Employer'
          component={Employer}
        />
        <Stack.Screen
          name='Employee'
          component={Employee}
          options={{
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})