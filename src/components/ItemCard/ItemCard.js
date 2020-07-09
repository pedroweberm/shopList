import React from 'react';

import { ToggleButton } from '~/components';

import {
  MainContainer, ContentContainer, ItemName, ItemQuantity, NameContainer,
} from './styles';

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,

  elevation: 6,
};

const ItemCard = ({
  onPress, itemName, itemQtd, checked, onCheck,
}) => {
  return (
    <MainContainer style={shadowStyle}>
      <ContentContainer onPress={onPress}>
        <NameContainer checked={checked}>
          <ItemQuantity>{`${itemQtd}x `}</ItemQuantity>
          <ItemName>{`${itemName}`}</ItemName>
        </NameContainer>
        <ToggleButton toggleState={checked} onToggle={onCheck} />
      </ContentContainer>
    </MainContainer>
  );
};

export default ItemCard;
