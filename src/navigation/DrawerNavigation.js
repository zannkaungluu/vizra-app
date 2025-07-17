import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import CustomDrawerContent from './CustomDrawerContent';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
       //defaultStatus="open"
      screenOptions={{headerShown: false, drawerType: 'front', drawerStyle:{width:236}}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="DRAWER_HOME" component={StackNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;