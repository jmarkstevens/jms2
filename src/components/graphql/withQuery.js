import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { Mutation, Query, withApollo } from 'react-apollo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { postsQuery, upvoteMutation, upvotedMutation } from '../../qraphql/gql';

const iconName = 'vote-outline';
const tintColor = 'purple';

const UpVote = ({ post, doUpvoted }) => (
  <Mutation
    mutation={upvoteMutation}
    update={(cache, { data: { upvotePost } }) => {
      doUpvoted(upvotePost);
      cache.readQuery({ query: postsQuery });
    }}
  >
    {upVote => (
      <TouchableOpacity
        onPress={() => upVote({ variables: { postId: post.id, inVote: post.votes + 1 } })
          }
      >
        <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />
      </TouchableOpacity>
    )}
  </Mutation>
);

UpVote.propTypes = {
  doUpvoted: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired, // eslint-disable-line
};

const GetQuery = ({ children, ...props }) => (
  <Query {...props}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Text>loading</Text>;
      }
      if (error) return <Text>Error!: ${error}</Text>;
      return children(data);
    }}
  </Query>
);

const Posts = ({ doUpvoted }) => (
  <GetQuery query={postsQuery}>
    {data => (
      <View>
        {data.posts.map((post, index) => {
          const key = index + 1;
          return (
            <View key={key} style={styles.ul}>
              <UpVote post={post} doUpvoted={doUpvoted} />
              <Text>
                {post.title} {post.author.lastName} with {post.votes} votes.
              </Text>
            </View>
          );
        })}
      </View>
    )}
  </GetQuery>
);

Posts.propTypes = {
  doUpvoted: PropTypes.func.isRequired,
};

class WithQuery extends Component {
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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.firstLine}>With Query</Text>
        <Posts doUpvoted={this.doUpvoted} />
      </View>
    );
  }
}

WithQuery.propTypes = {
  client: PropTypes.object.isRequired, // eslint-disable-line
  // data: PropTypes.object.isRequired, // eslint-disable-line
  // doUpvoted: PropTypes.func.isRequired,
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

export default withApollo(WithQuery);
