import styled from 'styled-components/native';

import {Animated} from 'react-native';

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BackgroundContainer = styled.View`
  position: absolute;
  top: -5%;
  left: 0;
  right: 0;
  height: 60%;
  border-radius: 50px;
  background: #665cbf;
  overflow: hidden;
`;

export const AnimatedContainer = styled(Animated.View)``;

export const ContentContainer = styled.View`
  width: 90%;
  height: 78%;
  border-radius: 40px;
  background: white;
  elevation: 7;
`;
