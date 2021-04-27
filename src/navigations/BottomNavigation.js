import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ImagesScreen from '../screens/ImagesScreen';
import AudioScreen from '../screens/AudioScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Audio" component={AudioScreen} />
      <Tab.Screen name="Images" component={ImagesScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
