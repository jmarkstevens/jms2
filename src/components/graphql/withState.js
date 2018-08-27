import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { graphql } from 'react-apollo';

import { getUpvotedPost } from '../../qraphql/gql';

const WithState = (props) => {
  console.log('WithState props:', props);
  let {
    id, title, votes, author,
  } = {
    id: 0,
    title: 'default',
    votes: 0,
    author: { lastName: '' },
  };
  const { data } = props;
  if (data.upvotedPost) {
    const { upvotedPost } = data;
    ({
      id, title, votes, author,
    } = upvotedPost);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.firstLine}> Most recent upvote</Text>
      <Text>id: {id}</Text>
      <Text>
        title: {title} {author.lastName}
      </Text>
      <Text>votes: {votes}</Text>
    </View>
  );
};

WithState.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
  },
  firstLine: {
    fontWeight: '700',
    paddingVertical: 10,
  },
});

export default graphql(getUpvotedPost)(WithState);
