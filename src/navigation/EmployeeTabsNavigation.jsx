import { Text, View, Button, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../component/AuthComponents/Profile';
import { Employee, JobsCategories } from '../screens/indexScreens'
import { JobsListCategories } from '../component/indexComponent';
const Tab = createBottomTabNavigator();
const EmployeeTabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Employee" component={Employee} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default EmployeeTabsNavigation

