import React, { useState, useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';

import { useLoadingScreen } from '~/hooks';
import { SignUp as Strings } from '~/language';
import { InputField, JumboButton } from '~/components';

import {
  MainContainer, ContentContainer, Title, InputContainer,
} from './styles';

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

const CREATE_USER_MUTATION = gql`
  mutation createUser($phone: String!, $name: String!, $password: String!) {
    createUser(phone: $phone, name: $name, password: $password) {
      _id
    }
  }
`;

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const [createUser, {
    data, loading, error, called,
  }] = useMutation(CREATE_USER_MUTATION);

  const loadingScreen = useLoadingScreen();

  useEffect(() => {
    if (called && loading) loadingScreen.open();
    else if (called && !loading) loadingScreen.close();
    else loadingScreen.close();
  }, [loading, data, error, called]);

  useEffect(() => {
    if (called && !loading) {
      if (!error) {
        navigation.navigate('ModalAuthSuccess', {
          message: 'Perfil cadastrado com sucesso! Agora use suas credenciais para fazer o login',
          buttonLabel: 'OK',
          onPress: () => navigation.navigate('SignIn'),
        });
      } else {
        navigation.navigate('ModalAuthSuccess', {
          message: error.message,
          buttonLabel: 'OK',
          onPress: () => {},
        });
      }
    }
  }, [loading, data, error, called]);

  const onSubmit = () => {
    createUser({ variables: { phone, name, password } });
  };

  return (
    <MainContainer showsVerticalScrollIndicator={false}>
      <ContentContainer style={shadowStyle}>
        <Title>{Strings.signUpTitle}</Title>
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
        <JumboButton label="Cadastrar" highlight disabled={password !== confirmedPassword} onPress={() => onSubmit()} />
      </ContentContainer>
    </MainContainer>
  );
};

export default SignUp;
