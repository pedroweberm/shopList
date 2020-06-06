import styled from 'styled-components/native';

import { H3Regular } from '~/components/Text';
import { normalize } from '~/helpers/responsive';

export const MainContainer = styled.View`
  
`;

export const Title = styled(H3Regular)`
  margin-bottom: ${normalize(10)}px;
`;
