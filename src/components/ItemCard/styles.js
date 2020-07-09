import { Animated } from 'react-native';

import styled from 'styled-components/native';

import { normalize, widthPercentage } from '~/helpers';
import { H3Regular } from '~/components/Text';

export const MainContainer = styled(Animated.View)`
  width: ${widthPercentage(90)}px;
  height: 80px;
  border-radius: ${normalize(20)}px;
  background: ${({ theme }) => theme?.colors?.primary};
  align-items: center;
  justify-content: center;
  margin: 18px;
  /* padding: ${normalize(60)}px 0px; */
`;

export const ListTitleContainer = styled.TouchableOpacity`
  width: 100%;
  padding: ${normalize(20)}px ${normalize(25)}px;
  background: white;
  opacity: 0.4;
`;

export const ListTitle = styled(H3Regular)`
  color: #000;
  text-align: left;
`;
