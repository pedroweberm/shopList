import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AddUser, Hamburger } from '~/assets/icons';
import { MainContainer, HeaderTitle, NewButton } from './styles';

const Header = ({ scene, previous, navigation }) => {
  const { top } = useSafeAreaInsets();

  const { options } = scene.descriptor;
  const title = options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : scene.route.name;

  return (
    <MainContainer top={top}>
      <Hamburger />
      <HeaderTitle>{title}</HeaderTitle>
      <NewButton onPress={() => console.warn('Press new')}>
        <AddUser />
      </NewButton>
    </MainContainer>
  );
};

export default Header;
