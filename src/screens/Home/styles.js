import styled from 'styled-components/native';

import { normalize } from '~/helpers/responsive';
import { H2Regular, H2Bold } from '~/components/Text';

export const MainContainer = styled.View`
  flex: 1;
  background: ${({ theme }) => theme?.colors?.light || '#fff'};
  padding: ${normalize(10)}px 0px;
`;

export const SectionTitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${normalize(15)}px;
`;

export const SectionTitle = styled(H2Regular)``;

export const NewButtonLabel = styled(H2Bold)`
  font-size: ${normalize(18)}px;
  color: ${({ theme }) => theme?.colors?.darkGray};
`;

export const NewButton = styled.TouchableOpacity``;

export const CarouselContainer = styled.View`
  padding: ${normalize(10)}px 0px ${normalize(20)}px 0px;
`;
