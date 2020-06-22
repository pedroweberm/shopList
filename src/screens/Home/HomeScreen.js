import React from 'react';

import { JumboButton } from '~/components';

import {
  MainContainer, NewButton, NewButtonLabel, SectionTitle, SectionTitleContainer,
} from './styles';

const Home = () => {
  return (
    <MainContainer>
      <SectionTitleContainer>
        <SectionTitle>Suas listas</SectionTitle>
        <NewButton>
          <NewButtonLabel>Nova lista</NewButtonLabel>
        </NewButton>
      </SectionTitleContainer>
      {/* <JumboButton label="Criar lista" /> */}
    </MainContainer>
  );
};

export default Home;
