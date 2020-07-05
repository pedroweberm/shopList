import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';

import { JumboButton, ListsCarousel } from '~/components';

import {
  MainContainer, NewButton, NewButtonLabel, SectionTitle, SectionTitleContainer, CarouselContainer,
} from './styles';

const GET_USER_QUERY = gql`
  query getUserData {
    getUserData {
      lists {
        name
      }
    }
  }
`;

const Home = ({ navigation }) => {
  const { token } = useSelector((state) => state.UserReducer);

  const { data, refetch } = useQuery(GET_USER_QUERY, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  return (
    <MainContainer>
      <SectionTitleContainer>
        <SectionTitle>Suas listas</SectionTitle>
        <NewButton onPress={() => navigation.navigate('NewList', { onSuccess: refetch })}>
          <NewButtonLabel>Nova lista</NewButtonLabel>
        </NewButton>
      </SectionTitleContainer>
      <CarouselContainer>
        <ListsCarousel lists={data?.getUserData?.lists} />
      </CarouselContainer>
    </MainContainer>
  );
};

export default Home;
