import React from 'react';

import { MainContainer, Label } from './styles';

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,

  elevation: 7,
};

const JumboButton = ({ label, onPress, highlight }) => {
  return (
    <MainContainer onPress={onPress} highlight={highlight} style={shadowStyle}>
      <Label highlight={highlight}>
        {label}
      </Label>
    </MainContainer>
  );
};

export default JumboButton;
