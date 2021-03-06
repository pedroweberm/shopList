import { Animated } from 'react-native';

import styled from 'styled-components/native';

import { normalize, widthPercentage } from '~/helpers';
import { H1SemiBold } from '~/components/Text';

export const MainContainer = styled(Animated.View)`
  width: ${widthPercentage(65)}px;
  /* height: 100%; */
  border-radius: ${normalize(20)}px;
  background: ${({ theme }) => theme?.colors?.primary};
  align-items: center;
  justify-content: center;
  padding: ${normalize(150)}px 0px;
`;

export const ListTitleContainer = styled.TouchableOpacity`
  width: 100%;
  padding: ${normalize(20)}px ${normalize(25)}px;
  background: white;
  opacity: 0.4;
`;

export const ListTitle = styled(H1SemiBold)`
  color: #000;
  text-align: left;
`;
