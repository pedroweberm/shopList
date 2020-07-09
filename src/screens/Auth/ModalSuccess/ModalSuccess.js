import React from 'react';

import { SuccessModal } from '~/components';
import { MainContainer } from './styles';

const ModalSuccess = ({ route, navigation }) => {
  const { message, buttonLabel, onPress } = route.params;

  return (
    <MainContainer>
      <SuccessModal
        message={message}
        buttonLabel={buttonLabel}
        onPress={() => { navigation.goBack(); onPress(); }}
      />
    </MainContainer>
  );
};

export default ModalSuccess;
