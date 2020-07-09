import styled from 'styled-components/native';

import { H3Regular } from '~/components/Text';
import { normalize } from '~/helpers/responsive';

export const MainContainer = styled.View`
  width: 80%;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

export const ModalContainer = styled.View`
  padding: ${normalize(25)}px;
  background: ${({ theme }) => theme?.colors?.lightPurple};
  border-radius: ${normalize(20)}px;
  align-items: center;
`;

export const Message = styled(H3Regular)`
  text-align: center;
  margin-bottom: ${normalize(25)}px;
`;

export const ButtonContainer = styled.View`
  align-self: stretch;
`;
