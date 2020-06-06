import styled from 'styled-components/native';

import { H1Bold } from '~/components/Text';
import { normalize } from '~/helpers/responsive';

export const MainContainer = styled.View`
  flex: 1;
  background: transparent;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.View`
  width: 90%;
  height: 78%;
  border-radius: 40px;
  background: white;
  elevation: 7;
  padding: ${normalize(30)}px ${normalize(20)}px;
`;

export const TextContainer = styled.View`
  flex: 2;
`;

export const ActionsContainer = styled.View`
  flex: 1;
`;

export const ButtonContainer = styled.View`
  margin: ${normalize(5)}px 0px;
`;

export const Text = H1Bold;
