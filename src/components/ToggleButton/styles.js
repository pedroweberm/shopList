import styled from 'styled-components/native';

import { normalize } from '~/helpers';

export const MainContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  align-items: center;
  background: ${({ theme }) => theme?.backgroundColor || 'transparent'};
  border-radius: ${normalize(100)}px;
  flex-direction: row;
  justify-content: center;
  width: ${normalize(55)}px;
  height: ${normalize(28)}px;
  overflow: visible;
  padding: ${normalize(2)}px;
`;

export const ToggledCircle = styled.View`
  align-items: center;
  background: ${({ theme, toggled }) => (toggled ? theme?.colors?.primary || '#5c5c5c' : theme?.toggleButton?.untoggled || '#fff')};
  border-radius: ${normalize(100)}px;
  height: 100%;
  aspect-ratio: 1;
  margin-left: ${({ toggled }) => (toggled ? 'auto' : '0px')};
  margin-right: ${({ toggled }) => (toggled ? '0px' : 'auto')};
  align-self: center;
  overflow: visible;
`;

export const ToggleRail = styled.View`
  height: ${normalize(10)}px;
  border-radius: ${normalize(100)}px;
  background: ${({ toggled, theme }) => (toggled ? theme?.colors?.d || '#adadad' : '#dadada')};
  position: absolute;
  left: ${normalize(2)}px;
  right: ${normalize(2)}px;
  align-self: center;
`;
