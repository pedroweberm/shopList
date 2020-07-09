import React, { useRef, useEffect } from 'react';
import { StatusBar, Animated, Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { BackgroundFruits } from '~/assets/icons';

import { MainContainer, BackgroundContainer, AnimatedContainer } from './styles';

const Background = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    startAnimation();
  });

  useFocusEffect(() => {
    navigation.navigate('Landing');
  });

  return (
    <MainContainer>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <BackgroundContainer>
        <AnimatedContainer
          style={{
            transform: [
              {
                translateX: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-5, 5],
                }),
              },
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 5],
                }),
              },
              {
                scale: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1.05, 1.15],
                }),
              },
            ],
          }}
        >
          <BackgroundFruits width="100%" />
        </AnimatedContainer>
      </BackgroundContainer>
    </MainContainer>
  );
};

export default Background;
