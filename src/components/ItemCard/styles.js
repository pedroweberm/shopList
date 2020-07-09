import { Animated } from 'react-native';

import styled from 'styled-components/native';

import { normalize, widthPercentage } from '~/helpers';
import { H2Black } from '~/components/Text';

export const MainContainer = styled(Animated.View)`
  width: ${widthPercentage(90)}px;
  border-radius: ${normalize(20)}px;
  background: ${({ theme }) => theme?.colors?.white};
  align-items: center;
  justify-content: center;
  margin: ${normalize(10)}px ${normalize(18)}px;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${normalize(20)}px ${normalize(25)}px;
  align-items: center;
  justify-content: space-between;
`;

export const NameContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  max-width: 70%;
  opacity: ${({ checked }) => (checked ? 0.5 : 1)};
`;

export const ItemName = styled(H2Black)`
  font-size: ${normalize(20)}px;
  line-height: ${normalize(21)}px;
  text-align: left;
`;

export const ItemQuantity = styled(H2Black)`
  font-size: ${normalize(16)}px;
  line-height: ${normalize(17)}px;
  text-align: left;
  color: ${({ theme }) => theme?.colors?.secondary};
  margin-bottom: ${normalize(2)}px;
`;
