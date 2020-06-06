import React from 'react';

import { SignUp as Strings } from '~/language';
import { Input } from '~/components';

import { MainContainer, ContentContainer, Title } from './styles';

const SignUp = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <Title>{Strings.signUpTitle}</Title>
        <Input />
      </ContentContainer>
    </MainContainer>
  );
};

export default SignUp;
