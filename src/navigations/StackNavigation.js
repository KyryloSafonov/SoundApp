import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import BottomNavigation from './BottomNavigation';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNavigator;
