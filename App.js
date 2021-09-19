import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import * as React from 'react';

import StarMapScreen from './screens/StarMap';

import DailyPicScreen from './screens/DailyPic';

import HomeScreen from './screens/Home'

import SpaceCraftScreen from './screens/SpaceCraft';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name= "Home" component={HomeScreen}/>
        <Stack.Screen name= "StarMap" component={StarMapScreen}/>
        <Stack.Screen name= "DailyPic" component={DailyPicScreen}/>
        <Stack.Screen name= "SpaceCraft" component={SpaceCraftScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

