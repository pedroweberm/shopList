import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Platform, UIManager, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
// import {Provider} from 'react-redux';
import Navigation from '~/navigation';
// import store from './src/store';

import theme from './theme';

const App = () => {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  return (
    // <Provider store={store}>
    <NavigationContainer>
      <StatusBar
        backgroundColor={'white'}
        translucent
        barStyle={'dark-content'}
      />
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
