import React, { useCallback } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { AddUser, Hamburger } from '~/assets/icons';
import {
  MainContainer, NewButton, NewButtonLabel, SectionTitle, SectionTitleContainer, CarouselContainer,
} from './styles';

const GET_LIST_QUERY = gql`
  query list($id: ID!) {
    list(id: $id) {
      name
      items {
        name
        quantity
      }
    }
  }
`;

const ListScreen = ({ route, navigation }) => {
  const { listId } = route?.params;
  const { token } = useSelector((state) => state.UserReducer);

  const {
    data, loading, error, refetch,
  } = useQuery(GET_LIST_QUERY, {
    variables: { id: listId },
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  return (
    <MainContainer>
      <SectionTitleContainer>
        <Hamburger />
        <SectionTitle>{data?.list?.name}</SectionTitle>
        <NewButton onPress={() => navigation.navigate('NewParticipant', { listId })}>
          <AddUser />
        </NewButton>
      </SectionTitleContainer>
      <SectionTitle>{loading ? 'Carregando' : data.list.items.map((item) => `${item.quantity} ${item.name}`)}</SectionTitle>
    </MainContainer>
  );
};

export default ListScreen;
