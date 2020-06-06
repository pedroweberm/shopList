import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, UIManager, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {
  ApolloClient, HttpLink, InMemoryCache, gql, ApolloProvider,
} from '@apollo/client';

import Navigation from '~/navigation';

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
    </ApolloProvider>
  );
};

export default App;
