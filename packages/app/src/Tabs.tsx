/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DynamicPortalScreen } from './dynamic-portal/DynamicPortalScreen';

/**
 * Tabs that to dynamically load Portals into the same RN screen.
 */
const Tabs = createBottomTabNavigator();
const TabsContainer = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="Shop"
          component={DynamicPortalScreen}
          initialParams={{ startingRoute: 'shop' }}
        />
        <Tabs.Screen
          name="Cart"
          component={DynamicPortalScreen}
          initialParams={{ startingRoute: 'cart' }}
        />
        <Tabs.Screen
          name="Profile"
          component={DynamicPortalScreen}
          initialParams={{ startingRoute: 'profile' }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
export default TabsContainer;
