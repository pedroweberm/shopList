import styled from 'styled-components/native';

import { H1Bold } from '~/components/Text';
import { normalize } from '~/helpers/responsive';

export const MainContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    paddingVertical: normalize(50),
  },
})`
  background: transparent;
  flex: 1;
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
