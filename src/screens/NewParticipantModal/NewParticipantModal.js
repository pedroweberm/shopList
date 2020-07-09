import React, { useState, useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useSelector } from 'react-redux';

import { InputField, JumboButton } from '~/components';
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

const ADD_PARTICIPANT_MUTATION = gql`
  mutation addUserToList($listId: ID!, $userPhone: String!) {
    addUserToList(listId: $listId, userPhone: $userPhone) {
      _id
    }
  }
`;

const NewListModal = ({ navigation, route }) => {
  const { listId } = route?.params;
  const { token } = useSelector((state) => state.UserReducer);
  const loadingScreen = useLoadingScreen();

  const [addParticipant, {
    data, loading, error, called,
  }] = useMutation(ADD_PARTICIPANT_MUTATION, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const [phone, setPhone] = useState('');

  const onSubmit = () => {
    addParticipant({ variables: { userPhone: phone, listId } });
  };

  useEffect(() => {
    if (called && loading) loadingScreen.open();
    else if (called && !loading) loadingScreen.close();
    else loadingScreen.close();
  }, [loading, data, error, called]);

  useEffect(() => {
    if (called && !loading) {
      if (!error) {
        navigation.goBack();
      } else console.warn(error);
    }
  }, [loading, data, error, called]);

  return (
    <MainContainer>
      <ContentContainer style={shadowStyle}>
        <Title>Adicionar participante</Title>
        <InputContainer>
          <InputField title="Número de telefone" value={phone} onChange={setPhone} type="phone" />
        </InputContainer>
        <JumboButton label="Cancelar" onPress={() => navigation.goBack()} style={{ marginBottom: normalize(10) }} />
        <JumboButton label="Adicionar" highlight disabled={phone.length <= 0} onPress={onSubmit} />
      </ContentContainer>
    </MainContainer>
  );
};

export default NewListModal;
