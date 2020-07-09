import { useCallback, useEffect, useState } from 'react';
import { gql, useQuery, useSubscription } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const GET_LIST_QUERY = gql`
  query list($id: ID!) {
    list(id: $id) {
      name
      items {
        _id
        name
        checked
        unavailable
        quantity
      }
    }
  }
`;

const ITEM_ADDED_SUBSCRIPTION = gql`
  subscription listItemAdded($listId: String!, $token: String!) {
    LIST_ITEM_ADDED(listId: $listId, token: $token) {
      _id
      name
      checked
      unavailable
      quantity
    }
  }
`;

const useListScreen = ({ listId }) => {
  const [list, setList] = useState([]);

  const { token } = useSelector((state) => state.UserReducer);
  const navigation = useNavigation();

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

  const { data: subscriptionData } = useSubscription(ITEM_ADDED_SUBSCRIPTION, { variables: { listId, token } });

  useEffect(() => {
    if (subscriptionData) {
      setList([...list, subscriptionData.LIST_ITEM_ADDED]);
    }
  }, [subscriptionData]);

  useEffect(() => {
    if (data) {
      setList(data?.list?.items);
    }
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  const listName = data?.list?.name;
  const onPressNew = () => navigation.navigate('NewParticipant', { listId });

  return {
    listName,
    onPressNew,
    list,
    onRefresh: refetch,
    loading,
  };
};

export default useListScreen;