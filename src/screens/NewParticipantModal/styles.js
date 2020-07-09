import styled from 'styled-components/native';

import { normalize } from '../../helpers';

import { H1Bold } from '../../components/Text';

export const MainContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.View`
  width: 90%;
  border-radius: 40px;
  background: white;
  padding: ${normalize(30)}px ${normalize(20)}px;
`;

export const Title = styled(H1Bold)`
  margin-bottom: ${normalize(30)}px;
`;

export const InputContainer = styled.View`
  margin-bottom: ${normalize(25)}px;
`;
