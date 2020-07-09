import styled from 'styled-components/native';

import { normalize } from '~/helpers/responsive';
import { H2Regular } from '~/components/Text';

export const MainContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme?.colors?.primary};
  padding: 0px ${normalize(15)}px;
  padding-top: ${({ top }) => top}px;
`;

export const HeaderTitle = styled(H2Regular)``;

export const NewButton = styled.TouchableOpacity``;
