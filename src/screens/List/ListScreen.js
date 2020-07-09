import React, { useLayoutEffect, useState } from 'react';
import { View, Text, RefreshControl, FlatList as List } from 'react-native';

import { useListScreen } from '~/hooks';
import { AddUser, Hamburger } from '~/assets/icons';
import { ItemCard } from '~/components';
import {
  MainContainer, NewButton, SectionTitle, SectionTitleContainer, Loader,
} from './styles';

const ListScreen = ({ route, navigation }) => {
  const { listId } = route?.params;
  const {
    listName, onPressNew, loading, list, onRefresh,
  } = useListScreen({ listId });

  useLayoutEffect(() => {
    navigation.dangerouslyGetParent().setOptions({
      headerRight: () => (
        <NewButton onPress={() => navigation.navigate('NewParticipant', { listId })}>
          <AddUser />
        </NewButton>
      ),
    });
  }, [navigation]);

  // const [page, setPage] = useState(1);
  // const [refreshing, setRefreshing] = useState(false);

  // async function refreshList() {
  //   setRefreshing(true);
  //   await loadPage(1, true);
  //   setRefreshing(false);
  // }

  const renderItem = ({ item }) => (
    <ItemCard
      onPress={() => console.log('sal')}
      // animatedStyle={{
      //   transform: [
      //     {
      //       scale: animatedValue.interpolate({
      //         inputRange: [itemIndex - 1, itemIndex, itemIndex + 1],
      //         outputRange: [0.9, 1, 0.9],
      //         extrapolate: 'clamp',
      //       }),
      //     },
      //   ],
      //   opacity: animatedValue.interpolate({
      //     inputRange: [itemIndex - 1, itemIndex, itemIndex + 1],
      //     outputRange: [0.7, 1, 0.7],
      //     extrapolate: 'clamp',
      //   }),
      // }}
      itemName={item.name}
      itemQtd={item.quantity}
    />
  );

  return (
    <MainContainer>
      <List
        contentContainerStyle={!list.length && {
          flex: 1,
          justifyContent: 'center',
        }}
        data={list}
        renderItem={renderItem}
        refreshing={loading}
        onRefresh={onRefresh}
        ListEmptyComponent={loading ? <Loader /> : <Text>Nada de itens</Text>}
        // onEndReached={list.length > 14 && !loading && (() => loadPage())}
        onEndReachedThreshold={0.1}
        ListFooterComponent={list.length > 0 && loading && <Loader />}
      />
    </MainContainer>
  );
};

export default ListScreen;
