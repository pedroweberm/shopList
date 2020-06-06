import styled from 'styled-components/native';

import { H1Bold } from '~/components/Text';
import { normalize } from '~/helpers/responsive';

export const MainContainer = styled.ScrollView.attrs({
  contentContainerStyle: { alignItems: 'center', justifyContent: 'center', paddingBottom: normalize(80) },
})`
  background: transparent;
  padding: ${normalize(50)}px 0px;
`;

export const ContentContainer = styled.View`
  width: 90%;
  border-radius: 40px;
  background: white;
  elevation: 7;
  padding: ${normalize(30)}px ${normalize(20)}px;
`;

export const Title = styled(H1Bold)`
  margin-bottom: ${normalize(30)}px;
`;

export const InputContainer = styled.View`
  margin-bottom: ${normalize(25)}px;
`;
