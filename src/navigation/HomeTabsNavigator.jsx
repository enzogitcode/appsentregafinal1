import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, JobsListByCategories, Profile } from '../screens/indexScreens.js'
import { JobsCategoriesList } from '../component/indexComponent.js';
import JobsList from '../screens/JobsList.jsx'
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
