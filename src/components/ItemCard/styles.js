import { Animated } from 'react-native';

import styled from 'styled-components/native';

import { normalize, widthPercentage } from '~/helpers';
import { H3Regular } from '~/components/Text';

export const MainContainer = styled(Animated.View)`
  width: ${widthPercentage(90)}px;
  height: ${normalize(80)}px;
  border-radius: ${normalize(20)}px;
  background: ${({ theme }) => theme?.colors?.primary};
  align-items: center;
  justify-content: center;
  margin: ${normalize(10)}px ${normalize(18)}px;
`;

export const ListTitleContainer = styled.TouchableOpacity`
  width: 100%;
  border-radius: ${normalize(20)}px;
  padding: ${normalize(20)}px ${normalize(25)}px;
  background: white;
  opacity: 0.4;
  align-items: flex-start;
  justify-content: center;
`;

export const ListTitle = styled(H3Regular)`
  color: #000;
  text-align: left;
`;
