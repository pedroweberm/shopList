import React from 'react';

import { JumboButton, ListsCarousel } from '~/components';

import {
  MainContainer, NewButton, NewButtonLabel, SectionTitle, SectionTitleContainer, CarouselContainer,
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
      <CarouselContainer>
        <ListsCarousel
          lists={[
            { name: 'Mercado dos Weber' },
            { name: 'Mercado dos Weber' },
            { name: 'Mercado dos Weber' },
            { name: 'Mercado dos Weber' },
            { name: 'Mercado dos Weber' },
          ]}
        />
      </CarouselContainer>
      {/* <JumboButton label="Criar lista" /> */}
    </MainContainer>
  );
};

export default Home;
