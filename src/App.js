import React from 'react';
import { Platform } from 'react-native';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import { withClientState } from 'apollo-link-state';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';

// import firebase from 'react-native-firebase'; // eslint-disable-line

import Navigator from './navigation/navigator';
import Cache from './qraphql/cache';
import { defaults, resolvers, typeDefs } from './qraphql/resolvers';

// eslint-disable-next-line
const cache = new Cache().cache;

const stateLink = withClientState({
  cache,
  resolvers,
  defaults,
  typeDefs,
});

const ip = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';
const uri = `http://${ip}:3000/graphql`;
const graphqlLink = createHttpLink({ uri });

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, graphqlLink]),
});

const App = () => (
  <ApolloProvider client={client}>
    <Navigator />
  </ApolloProvider>
);

export default App;
