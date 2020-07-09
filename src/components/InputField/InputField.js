import React from 'react';

import Input from '../Input/Input';

import { MainContainer, Title } from './styles';

const InputField = ({
  value, onChange, title, type,
}) => {
  return (
    <MainContainer>
      <Title>
        {title}
      </Title>
      <Input value={value} onChange={onChange} type={type} />
    </MainContainer>
  );
};

export default InputField;
