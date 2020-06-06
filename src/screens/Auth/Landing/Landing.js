import React from 'react';

import { JumboButton } from '~/components';

import {
  MainContainer, ContentContainer, ButtonContainer, ActionsContainer, TextContainer,
} from './styles';

const Landing = ({ navigation }) => {
  return (
    <MainContainer>
      <ContentContainer>
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
