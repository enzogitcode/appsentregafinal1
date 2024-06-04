import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import JobsListByCategories from '../screens/JobsListByCategories'
import { JobsCategoriesList } from '../component/indexComponent'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Employee from '../screens/Employee'

const Stack = createNativeStackNavigator()
const JobsCategoriesStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen
                    name='JobsCategoryList'
                    component={JobsCategoriesList}
                />
                <Stack.Screen
                    name='JobsListByCategories'
                    component={JobsListByCategories}
                />
                <Stack.Screen
                    name='Employee'
                    component={Employee}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
  
export default JobsCategoriesStack

