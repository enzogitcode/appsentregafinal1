import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, LoginScreen, MyProfile, SignupScreen } from '../screens/indexScreens.js'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { colors } from '../constants/colors.js';
import { useSelector } from 'react-redux'
import PostAJobForm from '../component/EmployerComponents/PostAJobsForm.jsx';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const {user} = useSelector(state => state.auth.value)
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
        options={
          {
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }} />

      {user ?
        <Tab.Screen name="MyProfile" component={MyProfile}
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
