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

const ListCard = ({ listTitle, animatedStyle }) => {
  return (
    <MainContainer style={animatedStyle}>
      <ListTitleContainer style={shadowStyle}>
        <ListTitle>{listTitle}</ListTitle>
      </ListTitleContainer>
    </MainContainer>
  );
};

export default ListCard;
