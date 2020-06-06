import React from 'react';
import LottieView from 'lottie-react-native';

import animation from '~/assets/animations/backgroundLoader.json';

const Loader = () => {
  return <LottieView source={animation} autoPlay loop />;
};

export default Loader;
