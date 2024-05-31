import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Employee from '../screens/Employee'
import { JobsListByCategories, JobsListCategories, JobsListByCategories } from '../component/indexComponent'

const EmployeeStackNavigation = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name='EmployeeHome'
                component={Employee}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='JobsListCategories'
                component={JobsListCategories}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='JobsListByCategories'
                component={JobsListByCategories}
                options={{
                    headerShown: false
                }}
            />
            

        </Stack.Navigator>
    )
}

export default EmployeeStackNavigation

const styles = StyleSheet.create({})