import styled from 'styled-components/native';

import { normalize } from '../../helpers/responsive';

export const H1Bold = styled.Text`
  font-family: ${({ theme }) => theme?.fonts?.primary?.bold};
  font-size: ${normalize(36)}px;
  color: ${({ theme }) => theme?.colors?.primary};
`;

export const H2Bold = styled.Text`
  font-family: ${({ theme }) => theme?.fonts?.primary?.bold};
  font-size: ${normalize(25)}px;
  color: ${({ theme }) => theme?.colors?.primary};
`;

export const H3Regular = styled.Text`
  font-family: ${({ theme }) => theme?.fonts?.primary?.regular};
  font-size: ${normalize(18)}px;
  color: ${({ theme }) => theme?.colors?.darkGray};
`;
