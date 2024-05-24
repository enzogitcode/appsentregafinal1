import { Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const EmployerTabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Employer" component={Employer} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default EmployerTabsNavigation

