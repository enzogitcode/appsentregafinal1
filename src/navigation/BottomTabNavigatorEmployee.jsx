import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { JobsListByCategories } from '../component/indexComponent'
const employeeTab = createBottomTabNavigator
const BottomTabNavigatorEmployee = () => {
  return (
    <employeeTab.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <Header route={route} />
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="JobSeeker"
        component={Searcher}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="Searcher"
                  size={24}
                  color={focused ? "black" : "white"}
                />
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="JobsList"
        component={JobsListByCategories}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="JobsListByCategories"
                  size={24}
                  color={focused ? "black" : "white"}
                />
              </View>
            )
          },
        }}
      />


    </employeeTab.Navigator>
  )
}

export default BottomTabNavigatorEmployee

const styles = StyleSheet.create({})