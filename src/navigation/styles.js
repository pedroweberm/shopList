import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

export const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {props.state.routes.map((route) => (
        <DrawerItem
          label={route.name}
          onPress={() => props.navigation.navigate(route.name)}
        />
      ))}
    </DrawerContentScrollView>
  );
};
