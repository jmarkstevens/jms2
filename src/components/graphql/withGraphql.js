import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { compose, graphql, withApollo } from 'react-apollo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { postsQuery, upvoteMutation, upvotedMutation } from '../../qraphql/gql';

class WithGraphql extends Component {
  // state = { upvotePost: { id: 0, title: '', votes: 0 } };

  doUpvoted = (upvotedPost) => {
    const { client } = this.props;
    client
      .mutate({
        mutation: upvotedMutation,
        variables: { ...upvotedPost },
      })
      .then(() => {
        // console.log("upvotedPost then");
      })
      .catch((err) => {
        console.log('catch', err);
      });
  };

  onMutate = (post) => {
    const newVote = post.votes + 1;
    const { mutate } = this.props;
    mutate({
      variables: {
        postId: post.id,
        inVote: newVote,
      },
    }).then((result) => {
      const { upvotePost } = result.data;
      // console.log("WithGraphql upvoteMutation then upvotePost:", upvotePost);
      this.doUpvoted(upvotePost);
    });
  };

  render() {
    // console.log('WithGraphql props:', this.props);
    const {
      data: { loading, posts },
    } = this.props;
    if (loading) return null;
    const iconName = 'vote-outline';
    const tintColor = 'purple';
    const list = posts.map((post, index) => {
      const key = index + 1;
      return (
        <View key={key} style={styles.ul}>
          <TouchableOpacity onPress={() => this.onMutate(post)}>
            <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />
          </TouchableOpacity>
          <Text>
            {post.title} {post.author.lastName} with {post.votes} votes.
          </Text>
        </View>
      );
    });
    return (
      <View style={styles.container}>
        <Text style={styles.firstLine}>With Graphql</Text>
        {/* <button onClick={() => this.getPosts()}> Update</button> */}
        <View>{list}</View>
      </View>
    );
  }
}

WithGraphql.propTypes = {
  client: PropTypes.object.isRequired, // eslint-disable-line
  data: PropTypes.object.isRequired, // eslint-disable-line
  mutate: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  ul: {
    flexDirection: 'row',
  },
  firstLine: {
    fontWeight: '700',
    paddingVertical: 10,
  },
});

export default compose(
  graphql(postsQuery),
  graphql(upvoteMutation),
  withApollo,
)(WithGraphql);
