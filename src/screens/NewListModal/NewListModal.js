import React, { useState, useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useSelector } from 'react-redux';

import { InputField, JumboButton } from '~/components';
import { SignUp as Strings } from '~/language';
import { normalize } from '../../helpers';
import { useLoadingScreen } from '~/hooks';

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

const CREATE_LIST_MUTATION = gql`
  mutation createList($name: String!) {
    createList(name: $name) {
      _id
    }
  }
`;

const NewListModal = ({ route, navigation }) => {
  const { onSuccess } = route?.params;

  const { token } = useSelector((state) => state.UserReducer);
  const loadingScreen = useLoadingScreen();

  const [createList, {
    data, loading, error, called,
  }] = useMutation(CREATE_LIST_MUTATION, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const [name, setName] = useState('');

  const onSubmit = () => {
    createList({ variables: { name } });
  };

  useEffect(() => {
    if (called && loading) loadingScreen.open();
    else if (called && !loading) loadingScreen.close();
    else loadingScreen.close();
  }, [loading, data, error, called]);

  useEffect(() => {
    if (called && !loading) {
      if (!error) {
        onSuccess?.();
        navigation.goBack();
      } else console.warn(error);
    }
  }, [loading, data, error, called]);

  return (
    <MainContainer>
      <ContentContainer style={shadowStyle}>
        <Title>Nova lista</Title>
        <InputContainer>
          <InputField title="Nome da lista" value={name} onChange={setName} type="name" />
        </InputContainer>
        <JumboButton label="Cancelar" onPress={() => navigation.goBack()} style={{ marginBottom: normalize(10) }} />
        <JumboButton label="Criar" highlight disabled={name.length <= 0} onPress={onSubmit} />
      </ContentContainer>
    </MainContainer>
  );
};

export default NewListModal;
