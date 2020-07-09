import styled from 'styled-components/native';

import { normalize, pixel } from '~/helpers/responsive';
import { H2Bold } from '~/components/Text';

export const MainContainer = styled.TouchableOpacity`
  border-radius: ${normalize(45)}px;
  border-width: ${pixel(2)}px;
  border-color: ${({ theme, highlight }) => (highlight ? theme?.colors?.white : theme?.colors?.primary)};
  padding: ${normalize(10)}px 0px;
  width: 100%;
  background: ${({ theme, highlight }) => (highlight ? theme?.colors?.primary : theme?.colors?.white)};
  align-items: center;
  justify-content: center;
`;

export const Label = styled(H2Bold)`
  color: ${({ theme, highlight }) => (highlight ? theme?.colors?.white : theme?.colors?.primary)};
`;
