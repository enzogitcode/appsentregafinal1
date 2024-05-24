import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {LoginScreen, SignupScreen} from '../screens/indexScreens'


const Stack = createNativeStackNavigator();

const AuthStackNavigator = () =>{
<Stack.Navigator
initialRouteName="Login"
screenOptions={{headerShown: false}}
>
<Stack.Screen component={LoginScreen} name="Login"/>
<Stack.Screen component={SignupScreen} name="Signup"/>

</Stack.Navigator>
}

export default AuthStackNavigator