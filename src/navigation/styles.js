import React from 'react';
import { Dimensions } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { CardStyleInterpolators } from '@react-navigation/stack';

export const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {props.state.routes.map((route) => (
        <DrawerItem
          key={route.key}
          label={route.name}
          onPress={() => props.navigation.navigate(route.name)}
        />
      ))}
    </DrawerContentScrollView>
  );
};

export const fadeFromBottom = (cardStyle, overlayStyle = {}) => {
  return {
    animationEnabled: true,
    cardStyle: { ...cardStyle, backgroundColor: 'rgba(0,0,0,0)' },
    cardOverlayEnabled: true,
    cardStyleInterpolator: (input) => {
      const {
        current: { progress },
      } = input;
      const interpolatedOpacity = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.8],
      });
      return {
        ...CardStyleInterpolators.forFadeFromBottomAndroid(input),
        overlayStyle: {
          ...overlayStyle,
          opacity: interpolatedOpacity,
        },
      };
    },
  };
};

export const fadeIn = (cardStyle, overlayStyle = {}) => {
  return {
    animationEnabled: true,
    cardStyle: { ...cardStyle },
    cardOverlayEnabled: true,
    cardStyleInterpolator: (input) => {
      const {
        current: { progress },
      } = input;
      return {
        cardStyle: { opacity: progress },
        overlayStyle: {
          ...overlayStyle,
        },
      };
    },
  };
};

const { width } = Dimensions.get('screen');

export const slideFromRight = (cardStyle, overlayStyle = {}, fixed) => {
  return {
    animationEnabled: true,
    cardStyle: { ...cardStyle, backgroundColor: 'rgba(0,0,0,0)' },
    cardOverlayEnabled: true,
    cardStyleInterpolator: (input) => {
      const {
        current: { progress }, next,
      } = input;

      const openingPosition = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [width, 0],
      });
      const closingPosition = next?.progress?.interpolate({
        inputRange: [0, 1],
        outputRange: [0, width],
      });

      const position = next ? closingPosition : openingPosition;
      const translateX = fixed ? 0 : position;

      const scale = next && !fixed ? next.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.8],
      }) : 1;

      return {
        cardStyle: {
          transform: [
            { translateX },
            { scale },
          ],
        },
      };
    },
  };
};
