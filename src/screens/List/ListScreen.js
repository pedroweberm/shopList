import React from 'react';
import { RefreshControl } from 'react-native';

import { useListScreen } from '~/hooks';
import { AddUser, Hamburger } from '~/assets/icons';
import {
  MainContainer, NewButton, SectionTitle, SectionTitleContainer,
} from './styles';

const ListScreen = ({ route, navigation }) => {
  const { listId } = route?.params;
  const {
    listName, onPressNew, loading, list, onRefresh,
  } = useListScreen({ listId });

  return (
    <MainContainer refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}>
      <SectionTitle>{loading ? 'Carregando' : list?.map((item) => `${item?.quantity} ${item?.name}`)}</SectionTitle>
    </MainContainer>
  );
};

export default ListScreen;
