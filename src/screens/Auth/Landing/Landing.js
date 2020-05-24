import React from 'react';

import {MainContainer, ContentContainer, Button, Text} from './styles';

const Landing = ({navigation}) => {
  return (
    <MainContainer>
      <ContentContainer>
        <Button
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text>Clica</Text>
        </Button>
      </ContentContainer>
    </MainContainer>
  );
};

export default Landing;
