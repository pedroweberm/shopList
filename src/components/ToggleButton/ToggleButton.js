import React from 'react';
import { LayoutAnimation } from 'react-native';

import { MainContainer, ToggledCircle, ToggleRail } from './styles';

const shadowStyle = {
  shadowColor: '#333333',
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 3,
};

const ToggleButton = ({ onToggle, toggleState }) => {
  const onPress = () => {
    LayoutAnimation?.configureNext?.({
      duration: 400,
      create: { type: 'linear', property: 'opacity' },
      update: { type: 'spring', springDamping: 0.65 },
    });
    onToggle?.();
  };

  return (
    <MainContainer onPress={onPress}>
      <ToggleRail toggled={toggleState} />
      <ToggledCircle style={shadowStyle} toggled={toggleState} />
    </MainContainer>
  );
};

export default ToggleButton;
