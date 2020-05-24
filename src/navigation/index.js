import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import * as Screens from '~/screens';

import {CustomDrawerContent} from './styles';

const ModalRootStack = createStackNavigator();

const ModalRootScreen = () => (
  <ModalRootStack.Navigator
    mode="modal"
    initialRouteName="AuthStack"
    headerMode="none">
    <ModalRootStack.Screen name={'AuthStack'} component={AuthStackScreen} />
    <ModalRootStack.Screen name="RootDrawer" component={RootDrawerScreen} />
  </ModalRootStack.Navigator>
);

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name={'Landing'} component={Screens.AuthLanding} />
  </AuthStack.Navigator>
);

const RootDrawer = createDrawerNavigator();

const RootDrawerScreen = () => (
  <RootDrawer.Navigator
    initialRouteName="Home"
    overlayColor={'white'}
    drawerContent={CustomDrawerContent}>
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
