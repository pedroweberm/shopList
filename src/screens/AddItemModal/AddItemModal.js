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

const ADD_ITEM_MUTATION = gql`
  mutation addItemToList($listId: ID!, $name: String!, $quantity: String!) {
    addItemToList(listId: $listId, name: $name, quantity: $quantity) {
      _id
      name
      checked
      unavailable
      quantity
    }
  }
`;

const AddItemModal = ({ navigation, route }) => {
  const { listId, onNewItem } = route?.params;
  const { token } = useSelector((state) => state.UserReducer);
  const loadingScreen = useLoadingScreen();

  const [addItem, {
    data, loading, error, called,
  }] = useMutation(ADD_ITEM_MUTATION, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const onSubmit = () => {
    addItem({ variables: { listId, name: itemName, quantity: itemQuantity } });
  };

  useEffect(() => {
    if (called && loading) loadingScreen.open();
    else if (called && !loading) loadingScreen.close();
    else loadingScreen.close();
  }, [loading, data, error, called]);

  useEffect(() => {
    if (called && !loading) {
      if (!error) {
        onNewItem({ item: data?.addItemToList });
        navigation.goBack();
      } else console.warn(error);
    }
  }, [loading, data, error, called]);

  return (
    <MainContainer>
      <ContentContainer style={shadowStyle}>
        <Title>Adicionar item</Title>
        <InputContainer>
          <InputField title="Nome do item" value={itemName} onChange={setItemName} type="name" />
        </InputContainer>
        <InputContainer>
          <InputField title="Quantidade" value={itemQuantity} onChange={setItemQuantity} type="number" />
        </InputContainer>
        <JumboButton label="Cancelar" onPress={() => navigation.goBack()} style={{ marginBottom: normalize(10) }} />
        <JumboButton label="Adicionar" highlight disabled={itemName.length <= 0} onPress={onSubmit} />
      </ContentContainer>
    </MainContainer>
  );
};

export default AddItemModal;
