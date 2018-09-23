import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { Platform } from 'react-native';

import { defaults, resolvers, typeDefs } from './resolvers';

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  resolvers,
  defaults,
  typeDefs,
});

const ip = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';
const uri = `http://${ip}:4000/graphql`;
const graphqlLink = createHttpLink({ uri });

let instance = null;
export default class StaticClient {
  constructor() {
    if (!instance) instance = this;
    this.client = new ApolloClient({
      cache,
      link: ApolloLink.from([stateLink, graphqlLink]),
    });
    return instance;
  }
}
