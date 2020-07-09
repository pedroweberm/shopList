import styled from 'styled-components/native';

import { normalize } from '../../helpers/responsive';

export const H1Bold = styled.Text`
  font-family: ${({ theme }) => theme?.fonts?.primary?.bold};
  font-size: ${normalize(36)}px;
  color: ${({ theme }) => theme?.colors?.primary};
`;

export const H1SemiBold = styled.Text`
  font-family: ${({ theme }) => theme?.fonts?.primary?.semiBold};
  font-size: ${normalize(36)}px;
  color: ${({ theme }) => theme?.colors?.primary};
`;

export const H2Black = styled.Text`
  font-family: ${({ theme }) => theme?.fonts?.primary?.black};
  font-size: ${normalize(25)}px;
  color: ${({ theme }) => theme?.colors?.primary};
`;

export const H2Bold = styled.Text`
  font-family: ${({ theme }) => theme?.fonts?.primary?.bold};
  font-size: ${normalize(25)}px;
  color: ${({ theme }) => theme?.colors?.primary};
`;

export const H2Regular = styled.Text`
  font-family: ${({ theme }) => theme?.fonts?.primary?.bold};
  font-size: ${normalize(25)}px;
  color: ${({ theme }) => theme?.colors?.darkGray};
`;

export const H3Regular = styled.Text`
  font-family: ${({ theme }) => theme?.fonts?.primary?.regular};
  font-size: ${normalize(18)}px;
  color: ${({ theme }) => theme?.colors?.darkGray};
`;
