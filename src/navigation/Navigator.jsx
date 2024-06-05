import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeTabs from './HomeTabsNavigator'
import { Employee, Employer, JobsListByCategories, LoginScreen, SignupScreen } from '../screens/indexScreens'
import { JobsCategoriesList } from '../component/indexComponent'
import EmployerList from '../component/EmployerComponents/EmployerList'

const Stack = createNativeStackNavigator()
const Navigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen InitialRouteName="Hometabs" name="Hometabs" component={HomeTabs} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Employee" component={Employee} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Employer" component={Employer} options={{
          headerShown: false
        }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="JobsListByCategories" component={JobsListByCategories} options={{
          headerShown: false
        }} />
        <Stack.Screen name="JobsCategoriesList" component={JobsCategoriesList} options={{
          headerShown: false
        }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="EmployeeList" component={EmployerList} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})