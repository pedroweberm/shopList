import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, UIManager, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import {
  ApolloClient, HttpLink, InMemoryCache, ApolloProvider, split,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/link-ws';
import { getMainDefinition } from '@apollo/client/utilities';

import { API_AWS_HOST } from 'react-native-dotenv';

import Navigation from '~/navigation';
import store, { persistor } from '~/store';
import theme from './theme';

const httpLink = new HttpLink({
  uri: `http://${API_AWS_HOST}/graphql`,
});

const wsLink = new WebSocketLink({
  uri: `ws://${API_AWS_HOST}/graphql`,
  options: {
    reconnect: true,
    lazy: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
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
            <StatusBar translucent barStyle="dark-content" />
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
