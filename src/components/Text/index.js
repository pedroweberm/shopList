import styled from 'styled-components/native';

import {normalize} from '../../helpers/responsive';

export const H1Bold = styled.Text`
  font-family: ${({theme}) => theme?.fonts?.primary?.bold};
  font-size: ${normalize(36)}px;
  color: ${({theme}) => theme?.colors?.primary};
`;
