import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import WithState from '../../components/graphql/withState';
import WithApollo from '../../components/graphql/withApollo';
import WithGraphql from '../../components/graphql/withGraphql';
import WithQuery from '../../components/graphql/withQuery';
import WithStaticCache from '../../components/graphql/withStaticCache';
import { testProperties } from '../../config/TestProperties';

import styles from './graphql.styles';

// import WithLink from '../components/graphql/withLink';

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
  onUpvote = upvotePost => {
    const { mutate } = this.props;
    mutate({ variables: upvotePost });
  };

  render() {
    return (
      <View style={styles.container} {...testProperties('Graphql')}>
        <ScrollView style={styles.verticalScrollView}>
          <WithState />
          <WithApollo />
          <WithGraphql />
          <WithQuery />
          <WithStaticCache />
          {/* <WithLink /> */}
        </ScrollView>
      </View>
    );
  }
}

GraphqlScreen.propTypes = {
  mutate: PropTypes.func.isRequired,
};

export default graphql(upvoteMutation)(GraphqlScreen);
