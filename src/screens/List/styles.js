import styled from 'styled-components/native';

import { normalize } from '~/helpers/responsive';
import { H2Bold, H2Regular } from '~/components/Text';

export const MainContainer = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme?.colors?.light || '#fff'};
`;

export const SectionTitle = styled(H2Regular)``;

export const NewButtonLabel = styled(H2Bold)`
  font-size: ${normalize(18)}px;
  color: ${({ theme }) => theme?.colors?.darkGray};
`;

export const NewButton = styled.TouchableOpacity`
  padding: 0px ${normalize(20)}px;
`;

export const CarouselContainer = styled.View`
  margin: ${normalize(20)}px 0px;
`;

export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 'large',
  color: theme?.colors?.darkGray,
}))`
  padding: 24px;
`;
