import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Searcher, Header, JobsListCategories} from '../component/indexComponent'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { JobsListByCategories } from '../component/indexComponent'

const employeeTab = createBottomTabNavigator ()
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
      <employeeTab.Screen
        name="JobSeeker"
        component={Searcher}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <View
                  name="Searcher"
                  size={24}
                  color={focused ? "black" : "white"}
                />
              </View>
            )
          },
        }}
      />
      <employeeTab.Screen
        name="JobsList"
        component={JobsListCategories}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <View
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