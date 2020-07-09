import { useCallback, useEffect, useState } from 'react';
import { LayoutAnimation } from 'react-native';
import {
  gql, useQuery, useSubscription, useMutation,
} from '@apollo/client';
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

const ITEM_UPDATED_SUBSCRIPTION = gql`
  subscription listItemUpdated($listId: String!, $token: String!) {
    LIST_ITEM_UPDATED(listId: $listId, token: $token) {
      _id
      name
      checked
      unavailable
      quantity
    }
  }
`;

const ITEM_UPDATED_MUTATION = gql`
  mutation updateListItem($listId: ID!, $id: ID!, $checked: Boolean!, $unavailable: Boolean!, $quantity: Int!) {
    updateListItem(listId: $listId, itemData: {id: $id, checked: $checked, unavailable: $unavailable, quantity: $quantity}) {
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

  const { data, loading, refetch } = useQuery(GET_LIST_QUERY, {
    variables: { id: listId },
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const onNewItem = ({ item }) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setList([item, ...list]);
  };

  const onItemAddedEvent = ({ subscriptionData }) => {
    if (subscriptionData?.data) {
      onNewItem({ item: subscriptionData?.data?.LIST_ITEM_ADDED });
    }
  };

  const onItemUpdatedEvent = ({ subscriptionData }) => {
    if (subscriptionData?.data) {
      const checkedItem = list.find((item) => item._id === subscriptionData?.data?.LIST_ITEM_UPDATED?._id);
      const newItem = {
        ...checkedItem,
        checked: !checkedItem.checked,
      };

      setList([...list.filter((item) => item._id !== subscriptionData?.data?.LIST_ITEM_UPDATED?._id), newItem]);
    }
  };

  useSubscription(ITEM_ADDED_SUBSCRIPTION, {
    variables: { listId, token },
    onSubscriptionData: onItemAddedEvent,
  });

  useSubscription(ITEM_UPDATED_SUBSCRIPTION, {
    variables: { listId, token },
    onSubscriptionData: onItemUpdatedEvent,
  });

  const [updateItem] = useMutation(ITEM_UPDATED_MUTATION, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  useEffect(() => {
    if (data && !loading) {
      setList(data?.list?.items);
      navigation.dangerouslyGetParent().setOptions({ headerTitle: data?.list?.name });
    }
  }, [loading]);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  const listName = data?.list?.name;
  const onPressAddParticipant = () => navigation.navigate('NewParticipant', { listId });
  const onPressNewItem = () => navigation.navigate('AddItemModal', { listId, onNewItem });
  const onCheck = ({ id }) => {
    const checkedItem = list.find((item) => item._id === id);
    const newItem = {
      ...checkedItem,
      checked: !checkedItem.checked,
    };

    setList([...list.filter((item) => item._id !== id), newItem]);
    updateItem({
      variables: {
        listId,
        id,
        checked: newItem.checked,
        unavailable: false,
        quantity: newItem.quantity,
      },
    });
  };

  return {
    listName,
    onPressNewItem,
    onPressAddParticipant,
    list,
    onRefresh: refetch,
    loading,
    onCheck,
  };
};

export default useListScreen;
