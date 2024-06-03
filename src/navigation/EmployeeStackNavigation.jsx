import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Employee, JobsList, JobsListByCategories} from '../screens/indexScreens'

const Stack = createNativeStackNavigator()

const EmployeeStackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Employee'
                    component={Employee}
                    
                />
                <Stack.Screen
                    name='JobsListByCategories'
                    component={JobsListByCategories}
                />
                <Stack.Screen
                    name='JobsList'
                    component={JobsList}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default EmployeeStackNavigation

