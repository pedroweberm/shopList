import React from 'react';

import { MainInput } from './styles';

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
};

const Input = () => {
  return (
    <MainInput style={shadowStyle} />
  );
};

export default Input;
