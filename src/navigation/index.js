import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import * as Screens from '~/screens';

const ModalRootStack = createStackNavigator();
const RootDrawer = createDrawerNavigator();

const ModalRootScreen = () => (
  <ModalRootStack.Navigator mode="modal">
    <ModalRootStack.Screen name="RootDrawer" component={RootDrawerScreen} />
  </ModalRootStack.Navigator>
);

const RootDrawerScreen = () => (
  <RootDrawer.Navigator>
    <RootDrawer.Screen name={'Home'} component={Screens.Home} />
    <RootDrawer.Screen name={'Groups'} component={Screens.Groups} />
    <RootDrawer.Screen name={'Sessions'} component={Screens.Sessions} />
    <RootDrawer.Screen name={'Ranking'} component={Screens.Ranking} />
    <RootDrawer.Screen name={'Stats'} component={Screens.Stats} />
    <RootDrawer.Screen name={'Profile'} component={Screens.Profile} />
    <RootDrawer.Screen name={'Settings'} component={Screens.Settings} />
  </RootDrawer.Navigator>
);

export default ModalRootScreen;
