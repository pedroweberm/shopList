import React, { useEffect } from 'react';

import { Loader } from '~/components';
import { useDisableBackHandling } from '~/hooks';

import { MainContainer } from './styles';

const Loading = ({ navigation, route }) => {
  const { setLoadingNavigation } = route?.params || {};

  useDisableBackHandling(navigation);
  useEffect(() => {
    if (navigation && setLoadingNavigation) {
      setLoadingNavigation(navigation);
    }
  }, [navigation, setLoadingNavigation]);

  return (
    <MainContainer>
      <Loader />
    </MainContainer>
  );
};

export default Loading;
