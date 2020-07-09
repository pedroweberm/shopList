import styled from 'styled-components/native';

import { normalize, pixel } from '~/helpers/responsive';

export const MainInput = styled.TextInput`
  border-radius: ${normalize(45)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-width: ${pixel(1)}px;
  border-color: ${({ theme }) => theme?.colors?.lightGray};
  background: ${({ theme }) => theme?.colors?.white};
  font-family: ${({ theme }) => theme?.fonts?.primary?.medium};
  font-size: ${normalize(16)}px;
  color: ${({ theme }) => theme?.colors?.darkGray};
  padding: ${normalize(10)}px ${normalize(10)}px;
`;
