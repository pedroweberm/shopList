import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';

import * as Screens from '~/screens';

import {
  CustomDrawerContent, slideFromRight, fadeFromBottom,
} from './styles';

const ModalRootStack = createStackNavigator();

const ModalRootScreen = () => {
  const { isLogged } = useSelector((state) => state.UserReducer);

  return (
    <ModalRootStack.Navigator
      mode="modal"
      initialRouteName="AuthStack"
      headerMode="none"
    >
      {!isLogged && (
        <ModalRootStack.Screen
          name="AuthStack"
          component={AuthStackScreen}
          options={{ gestureEnabled: false }}
        />
      )}
      <ModalRootStack.Screen name="RootDrawer" component={RootDrawerScreen} />
      <ModalRootStack.Screen
        name="Loading"
        component={Screens.Loading}
        options={{ ...fadeFromBottom({}, { backgroundColor: '#ffffff' }), gestureEnabled: false }}
      />
    </ModalRootStack.Navigator>
  );
};

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none" mode="modal">
    <AuthStack.Screen
      name="Background"
      component={Screens.AuthBackground}
    />
    <AuthStack.Screen
      name="Landing"
      component={Screens.AuthLanding}
      options={{
        ...slideFromRight({}, {}, true),
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    />
    <AuthStack.Screen
      name="SignIn"
      component={Screens.AuthSignIn}
      options={{
        ...slideFromRight(),
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    />
    <AuthStack.Screen
      name="SignUp"
      component={Screens.AuthSignUp}
      options={{
        ...slideFromRight(),
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    />
    <AuthStack.Screen
      name="ModalAuthSuccess"
      component={Screens.ModalAuthSuccess}
      options={{
        ...fadeFromBottom(),
        gestureEnabled: false,
        gestureDirection: 'vertical',
      }}
    />
  </AuthStack.Navigator>
);

const RootDrawer = createDrawerNavigator();

const RootDrawerScreen = () => (
  <RootDrawer.Navigator
    initialRouteName="Home"
    overlayColor="white"
    // drawerContent={CustomDrawerContent}
  >
    <RootDrawer.Screen name="Home" component={Screens.Home} />
    <RootDrawer.Screen name="Groups" component={Screens.Groups} />
    <RootDrawer.Screen name="Sessions" component={Screens.Sessions} />
    <RootDrawer.Screen name="Ranking" component={Screens.Ranking} />
    <RootDrawer.Screen name="Stats" component={Screens.Stats} />
    <RootDrawer.Screen name="Profile" component={Screens.Profile} />
    <RootDrawer.Screen name="Settings" component={Screens.Settings} />
  </RootDrawer.Navigator>
);

export default ModalRootScreen;
