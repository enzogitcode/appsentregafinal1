import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, JobsListByCategories, Profile, SignupScreen } from '../screens/indexScreens.js'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { colors } from '../constants/colors.js';


const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size}/>
        ),
      }} />
      <Tab.Screen name="SignupScreen" component={SignupScreen} 
      
      />

      <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="profile" color={color} size={size} />
        ),
      }}

      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
