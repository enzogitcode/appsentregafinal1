import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home, Employee, Employer } from '../screens/indexScreens.js'
const Stack = createNativeStackNavigator()

const HomeStackNavigator = () => {
    return (
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
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Employee'
                component={Employee}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})