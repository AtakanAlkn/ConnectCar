import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserSelectionScreen from './screens/UserSelectionScreen';
import LoginScreen from './screens/LoginScreen';
import ManagerLoginScreen from './screens/ManagerLoginScreen';
import DrivingWarningScreen from './screens/DrivingWarningScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="UserSelectionScreen"
          component={UserSelectionScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="ManagerLoginScreen"
          component={ManagerLoginScreen}
        />
        <Stack.Screen
          name="DrivingWarningScreen"
          component={DrivingWarningScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
