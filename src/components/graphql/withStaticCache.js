import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { postsQuery, upvoteMutation, upvotedMutation } from '../../qraphql/gql';
import StaticClient from '../../qraphql/staticClient';

const { client } = new StaticClient();

export default class WithStaticCache extends Component {
  state = { posts: [] };

  componentDidMount() {
    this.getPosts();
  }

  doUpvoted = upvotedPost => {
    client
      .mutate({
        mutation: upvotedMutation,
        variables: { ...upvotedPost },
      })
      .then(() => {
        // console.log("upvotedPost then");
      })
      .catch(err => {
        console.log('catch', err);
      });
  };

  onMutate = post => {
    const newVote = post.votes + 1;
    client
      .mutate({
        mutation: upvoteMutation,
        variables: {
          postId: post.id,
          inVote: newVote,
        },
      })
      .then(data => {
        const { upvotePost } = data.data;
        this.doUpvoted(upvotePost);
        this.getPosts();
      })
      .catch(err => {
        console.log('catch', err);
      });
  };

  getPosts0 = () => {
    const observableQuery = client.watchQuery({
      query: postsQuery,
      pollInterval: 15000,
    });
    observableQuery.subscribe({
      next: ({ data }) => this.setState({ posts: data.posts }),
    });
  };

  getPosts = () => {
    client
      .query({
        query: postsQuery,
      })
      .then(data => {
        const { posts } = data.data;
        this.setState({ posts });
      })
      .catch(err => {
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
            <MaterialCommunityIcons
              name={iconName}
              size={25}
              color={tintColor}
            />
          </TouchableOpacity>
          <Text>
            {post.title} {post.author.lastName} with {post.votes} votes.
          </Text>
        </View>
      );
    });
    return (
      <View style={styles.container}>
        <Text style={styles.firstLine}>With StaticCache</Text>
        {/* <button onClick={() => this.getPosts()}> Update</button> */}
        <View>{list}</View>
      </View>
    );
  }
}

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
