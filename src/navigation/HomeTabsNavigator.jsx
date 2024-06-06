import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, JobsListByCategories, LoginScreen, Profile, SignupScreen } from '../screens/indexScreens.js'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { colors } from '../constants/colors.js';
import { useSelector } from 'react-redux';


const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  //const user= useSelector (state=> state.authReducer.value.user)
  const user= 9
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
       options={
        {
          headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size}/>
        ),
      }} />
      <Tab.Screen name="SignupScreen" component={SignupScreen} />
{user ?
      <Tab.Screen name="Profile" component={Profile}
      options={{
        headerShown: false,
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="profile" color={color} size={size} />
        ),
      }}

      />
  : 
  <Tab.Screen name="LoginScreen" component={LoginScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'LoginScreen',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="profile" color={color} size={size} />
        ),
      }}

      />

  }
    </Tab.Navigator>
  );
}

export default HomeTabs;
