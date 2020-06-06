import React from 'react';

import { SignIn as Strings } from '~/language';

import { MainContainer, ContentContainer, Title } from './styles';

const SignIn = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <Title>{Strings.signInTitle}</Title>
      </ContentContainer>
    </MainContainer>
  );
};

export default SignIn;
