import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { AddUser, Hamburger } from '~/assets/icons';
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
        <Hamburger />
        <SectionTitle>Nome da lista</SectionTitle>
        <NewButton onPress={() => navigation.navigate('NewParticipant')}>
          <AddUser />
        </NewButton>
      </SectionTitleContainer>
    </MainContainer>
  );
};

export default Home;
