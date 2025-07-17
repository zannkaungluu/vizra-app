import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DrawerNavigation from './src/navigation/DrawerNavigation';

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
