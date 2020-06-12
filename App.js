import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, UIManager, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import {
  ApolloClient, HttpLink, InMemoryCache, ApolloProvider,
} from '@apollo/client';

import Navigation from '~/navigation';
import store, { persistor } from '~/store';
import theme from './theme';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://192.168.0.45:3000/graphql',
  }),
});


const App = () => {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StatusBar
              backgroundColor="white"
              translucent
              barStyle="dark-content"
            />
            <ThemeProvider theme={theme}>
              <Navigation />
            </ThemeProvider>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
