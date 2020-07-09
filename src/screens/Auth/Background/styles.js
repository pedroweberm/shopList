import styled from 'styled-components/native';

import { Animated } from 'react-native';

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BackgroundContainer = styled.View`
  position: absolute;
  top: -10%;
  padding-top: 10%;
  left: 0;
  right: 0;
  height: 60%;
  border-radius: 50px;
  background: ${({ theme }) => theme?.colors?.primary};
  overflow: hidden;
`;

export const AnimatedContainer = styled(Animated.View)``;
