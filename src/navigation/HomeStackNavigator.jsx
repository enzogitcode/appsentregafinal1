import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home, Employee, Employer } from '../screens/indexScreens.js'
import BottomTabNavigatorEmployee from './BottomTabNavigatorEmployee.jsx'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Profile from '../component/AuthComponents/Profile.jsx'
//const Stack = createNativeStackNavigator()

/*     return (
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
 */


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
