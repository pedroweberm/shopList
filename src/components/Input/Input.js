import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

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

const getPropsFromType = (type) => {
  switch (type) {
    case 'phone':
      return {
        autoCompleteType: 'tel',
        autoCorrect: false,
        blurOnSubmit: true,
        keyboardType: 'phone-pad',
        placeholder: '(99)99999-9999',
        returnKeyType: 'next',
        secureTextEntry: false,
        spellCheck: false,
      };
    case 'password':
      return {
        autoCompleteType: 'off',
        autoCorrect: false,
        blurOnSubmit: true,
        keyboardType: 'default',
        placeholder: 'senha',
        returnKeyType: 'done',
        secureTextEntry: true,
        spellCheck: false,
      };
    case 'name':
      return {
        autoCompleteType: 'name',
        autoCorrect: true,
        blurOnSubmit: true,
        keyboardType: 'default',
        placeholder: 'Ex.: João da Silva',
        returnKeyType: 'next',
        secureTextEntry: false,
        spellCheck: false,
      };
    default:
      return {};
  }
};

const Input = ({ value, onChange, type }) => {
  const theme = useContext(ThemeContext);

  return (
    <MainInput
      style={shadowStyle}
      value={value}
      onChangeText={onChange}
      {...getPropsFromType(type)}
      selectionColor={theme?.colors?.secondary}
      underlineColorAndroid="transparent"
    />
  );
};

export default Input;
