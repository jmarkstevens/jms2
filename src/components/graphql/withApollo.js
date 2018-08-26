import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { withApollo } from 'react-apollo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { postsQuery, upvoteMutation, upvotedMutation } from '../../qraphql/gql';

class WithApollo extends Component {
  state = { posts: [] };

  componentDidMount() {
    this.getPosts();
  }

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
    const { client } = this.props;
    const newVote = post.votes + 1;
    client
      .mutate({
        mutation: upvoteMutation,
        variables: {
          postId: post.id,
          inVote: newVote,
        },
      })
      .then((data) => {
        const { upvotePost } = data.data;
        this.doUpvoted(upvotePost);
        this.getPosts();
      })
      .catch((err) => {
        console.log('catch', err);
      });
  };

  getPosts = () => {
    const { client } = this.props;
    const observableQuery = client.watchQuery({
      query: postsQuery,
      pollInterval: 15000,
    });
    observableQuery.subscribe({
      next: ({ data }) => this.setState({ posts: data.posts }),
    });
  };

  getPosts0 = () => {
    const { client } = this.props;
    client
      .query({
        query: postsQuery,
      })
      .then((data) => {
        const { posts } = data.data;
        this.setState({ posts });
      })
      .catch((err) => {
        console.log('catch', err);
      });
  };

  render() {
    console.log('WithApollo props:', this.props);
    const { posts } = this.state;
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
        <Text>With Apollo</Text>
        {/* <button onClick={() => this.getPosts()}> Update</button> */}
        <View>{list}</View>
      </View>
    );
  }
}

WithApollo.propTypes = {
  client: PropTypes.object.isRequired, // eslint-disable-line
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
  returnView: {
    height: 35,
  },
  picker: {
    width: 100,
  },
});

export default withApollo(WithApollo);
