import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Employee, JobsListByCategories} from '../screens/indexScreens'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const EmployeeStackNavigation = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen
                    name='Employee'
                    component={Employee}
                />
                <Stack.Screen
                    name='JobsListByCategories'
                    component={JobsListByCategories}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default EmployeeStackNavigation

