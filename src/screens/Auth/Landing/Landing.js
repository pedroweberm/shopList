import React from 'react';
import { View } from 'react-native';

import { JumboButton } from '~/components';

import {
  MainContainer, ContentContainer, ButtonContainer, ActionsContainer, TextContainer, TestContainer, Box,
} from './styles';

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,

  elevation: 7,
};

const Landing = ({ navigation }) => {
  return (
    <MainContainer>
      <ContentContainer style={shadowStyle}>
        <TextContainer />
        <ActionsContainer>
          <ButtonContainer>
            <JumboButton
              highlight
              onPress={() => {
                navigation.navigate('SignUp');
              }}
              label="Cadastro"
            />
          </ButtonContainer>
          <ButtonContainer>
            <JumboButton
              onPress={() => {
                navigation.navigate('SignIn');
              }}
              label="Login"
            />
          </ButtonContainer>
        </ActionsContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default Landing;
