import React, { useState, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import { useLoadingScreen } from '~/hooks';
import { SignIn as Strings } from '~/language';
import { InputField, JumboButton } from '~/components';

import {
  MainContainer, ContentContainer, Title, InputContainer,
} from './styles';

const LOGIN_QUERY = gql`
  query login($phone: String!, $password: String!) {
    login(phone: $phone, password: $password) {
      token
    }
  }
`;

const SignIn = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [login, {
    data, loading, error, called,
  }] = useLazyQuery(LOGIN_QUERY);

  const loadingScreen = useLoadingScreen();

  useEffect(() => {
    if (called && loading) loadingScreen.open();
    else if (called && !loading) {
      loadingScreen.close();
      console.warn(data.login.token);
    } else loadingScreen.close();
  }, [loading, data, error, called]);

  const onSubmit = () => {
    login({ variables: { phone, password } });
  };

  return (
    <MainContainer>
      <ContentContainer>
        <Title>{Strings.signInTitle}</Title>
        <InputContainer>
          <InputField title="Telefone" value={phone} onChange={setPhone} type="phone" />
        </InputContainer>
        <InputContainer>
          <InputField title="Senha" value={password} onChange={setPassword} type="password" />
        </InputContainer>
        <JumboButton
          label="Entrar"
          highlight
          onPress={() => onSubmit()}
        />
      </ContentContainer>
    </MainContainer>
  );
};

export default SignIn;
