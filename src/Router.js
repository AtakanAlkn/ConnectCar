import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserSelectScreen from './screens/UserSelectScreen';
import LoginScreen from './screens/DriverScreens/LoginScreen';
import ManagerLoginScreen from './screens/ManagerScreens/ManagerLoginScreen';
import DrivingWarningScreen from './screens/DriverScreens/DrivingWarningScreen';
import CarSelectScreen from './screens/DriverScreens/CarSelectScreen';
import DashboardScreen from './screens/ManagerScreens/DashboardScreen';
import DriveScreen from './screens/DriverScreens/DriveScreen/DriveScreen';
import HomeScreen from './screens/ManagerScreens/HomeScreen';
import DriverManagementScreen from './screens/ManagerScreens/DriverManagementScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="UserSelectScreen" component={UserSelectScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="ManagerLoginScreen"
          component={ManagerLoginScreen}
        />
        <Stack.Screen
          name="DrivingWarningScreen"
          component={DrivingWarningScreen}
        />
        <Stack.Screen name="CarSelectScreen" component={CarSelectScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="DriveScreen" component={DriveScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="DriverManagementScreen"
          component={DriverManagementScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
