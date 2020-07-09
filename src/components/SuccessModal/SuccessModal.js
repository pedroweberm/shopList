import React from 'react';

import JumboButton from '~/components/JumboButton/JumboButton';

import {
  MainContainer, ModalContainer, Message, ButtonContainer,
} from './styles';

const SuccessModal = ({ message, buttonLabel, onPress }) => {
  return (
    <MainContainer>
      <ModalContainer>
        <Message>
          {message}
        </Message>
        <ButtonContainer>
          <JumboButton label={buttonLabel} onPress={onPress} highlight />
        </ButtonContainer>
      </ModalContainer>
    </MainContainer>
  );
};

export default SuccessModal;
