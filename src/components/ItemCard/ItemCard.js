import React from 'react';

import { MainContainer, ListTitleContainer, ListTitle } from './styles';

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.5,
  shadowRadius: 4.62,

  elevation: 6,
};

const ItemCard = ({ onPress, itemName, itemQtd }) => {
  return (
    <MainContainer>
      <ListTitleContainer onPress={onPress} style={shadowStyle}>
        <ListTitle>{itemName}</ListTitle>
        <ListTitle>{itemQtd}</ListTitle>
      </ListTitleContainer>
    </MainContainer>
  );
};

export default ItemCard;
