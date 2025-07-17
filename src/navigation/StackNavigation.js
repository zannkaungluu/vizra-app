import {Platform} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screen/login/LoginScreen';
import RegisterScreen from '../screen/login/RegisterScreen';
import HomeScreen from '../screen/page/HomeScreen';
import VideoScreen from '../screen/page/VideoScreen';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={
        Platform.OS === 'android'
          ? {
              headerShown: false,
            }
          : {
              headerShown: false,
            }
      }
      initialRouteName='LOGIN'>
      <Stack.Screen name="LOGIN" component={LoginScreen} />
      <Stack.Screen name='REGISTER' component={RegisterScreen} />
      <Stack.Screen name='HOME' component={HomeScreen} />
      <Stack.Screen name='VIDEO' component={VideoScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
