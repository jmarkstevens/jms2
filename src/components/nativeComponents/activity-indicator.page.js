import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

type State = { animating: boolean };
type Timer = number;

class ToggleAnimatingActivityIndicator extends React.Component {
  static navigationOptions = { title: 'Activity Indicator' };

  constructor(props) {
    super(props);
    this.state = {
      animating: true,
    };
  }

  state: State;

  componentDidMount() {
    this.setToggleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  setToggleTimeout() {
    this._timer = setTimeout(() => {
      this.setState({ animating: !this.state.animating });
      this.setToggleTimeout();
    }, 2000);
  }

  _timer: Timer;

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          style={[styles.centering, styles.gray]}
          color="white"
        />
        <View>
          <ActivityIndicator style={[styles.centering]} />
          <ActivityIndicator
            style={[styles.centering, { backgroundColor: '#eeeeee' }]}
          />
        </View>
        <View style={styles.horizontal}>
          <ActivityIndicator color="#0000ff" />
          <ActivityIndicator color="#aa00aa" />
          <ActivityIndicator color="#aa3300" />
          <ActivityIndicator color="#00aa00" />
        </View>
        <ActivityIndicator
          style={[styles.centering, styles.gray]}
          size="large"
          color="white"
        />
        <View style={styles.horizontal}>
          <ActivityIndicator size="large" color="#0000ff" />
          <ActivityIndicator size="large" color="#aa00aa" />
          <ActivityIndicator size="large" color="#aa3300" />
          <ActivityIndicator size="large" color="#00aa00" />
        </View>
        <ActivityIndicator
          animating={this.state.animating}
          style={[styles.centering, { height: 80 }]}
          size="large"
        />
        <ActivityIndicator
          style={[styles.centering, { transform: [{ scale: 1.5 }] }]}
          size="large"
        />
      </View>
    );
  }
}

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
  imageSty: {
    height: 20,
    width: 20,
  },
  returnView: {
    height: 35,
  },
  spacerView: {
    height: 5,
  },
  btnText: {
    color: '#afa',
    fontSize: 12,
  },
  customBtn: {
    backgroundColor: '#363313',
    borderRadius: 15,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});

module.exports = ToggleAnimatingActivityIndicator;
