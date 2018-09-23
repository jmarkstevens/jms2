import React from 'react';
import { ApolloProvider } from 'react-apollo';

import Navigator from './screens/navigator';
import StaticClient from './qraphql/staticClient';

const { client } = new StaticClient();

const App = () => (
  <ApolloProvider client={client}>
    <Navigator />
  </ApolloProvider>
);

export default App;
