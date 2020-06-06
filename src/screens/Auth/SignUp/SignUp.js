import React, { useState, useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';

import { useLoadingScreen } from '~/hooks';
import { SignUp as Strings } from '~/language';
import { InputField, JumboButton, Loader } from '~/components';

import {
  MainContainer, ContentContainer, Title, InputContainer,
} from './styles';

const CREATE_USER_MUTATION = gql`
  mutation createUser($phone: String!, $name: String!, $password: String!) {
    createUser(phone: $phone, name: $name, password: $password) {
      _id
    }
  }
`;

const SignUp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER_MUTATION);

  const loadingScreen = useLoadingScreen();

  useEffect(() => {
    if (!loading) loadingScreen.close();
  }, [loading]);

  const onSubmit = () => {
    loadingScreen.open();
    createUser({ variables: { phone, name, password } });
  };

  return (
    <MainContainer showsVerticalScrollIndicator={false}>
      <ContentContainer>
        <Title>{Strings.signUpTitle}</Title>
        {loading && <Title>Criando...</Title>}
        {error && <Title>{`Erro! ${error}}`}</Title>}
        {data && <Title>{`Sucesso! ${JSON.stringify(data)}`}</Title>}
        <InputContainer>
          <InputField title="Nome" value={name} onChange={setName} type="name" />
        </InputContainer>
        <InputContainer>
          <InputField title="Telefone" value={phone} onChange={setPhone} type="phone" />
        </InputContainer>
        <InputContainer>
          <InputField title="Senha" value={password} onChange={setPassword} type="password" />
        </InputContainer>
        <InputContainer>
          <InputField title="Confirmar senha" value={confirmedPassword} onChange={setConfirmedPassword} type="password" />
        </InputContainer>
        <JumboButton
          label="Cadastrar"
          highlight
          disabled={password !== confirmedPassword}
          onPress={() => onSubmit()}
        />
      </ContentContainer>
    </MainContainer>
  );
};

export default SignUp;
