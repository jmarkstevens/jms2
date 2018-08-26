import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import WithApollo from '../components/graphql/withApollo';

// import WithLink from '../components/graphql/withLink';
// import WithGraphql from '../components/graphql/withGraphql';
// import WithQuery from '../components/graphql/withQuery';
// import WithState from '../components/graphql/withState';
// import WithStaticCache from '../components/graphql/withStaticCache';

const upvoteMutation = gql`
  mutation upvotePost($postId: Int!, $inVote: Int) {
    upvotePost(postId: $postId, inVote: $inVote) {
      id
      title
      votes
    }
  }
`;

class GraphqlScreen extends Component {
  onUpvote = (upvotePost) => {
    const { mutate } = this.props;
    mutate({ variables: upvotePost });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Graphql screen</Text>
        <WithApollo />
        {/* <WithState />
        <WithGraphql />
        <WithQuery />
        <WithStaticCache />
        <WithLink /> */}
      </View>
    );
  }
}

GraphqlScreen.propTypes = {
  mutate: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  returnView: {
    height: 35,
  },
  picker: {
    width: 100,
  },
});

export default graphql(upvoteMutation)(GraphqlScreen);
