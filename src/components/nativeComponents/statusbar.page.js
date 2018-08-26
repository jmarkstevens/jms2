import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const barStyles = ['default', 'light-content', 'dark-content'];

const showHideTransitions = ['fade', 'slide'];

function getValue<T>(values: Array<T>, index: number): T {
  return values[index % values.length];
}

class StatusBarPage extends React.Component {
  static navigationOptions = { title: 'StatusBar' };

  state = {
    animated: true,
    hidden: false,
    showHideTransition: getValue(showHideTransitions, 0),
    networkActivityIndicatorVisible: false,
  };

  barStyleIndex = 0;

  showHideTransitionIndex = 0;

  _onChangeAnimated = () => {
    const { animated } = this.state;
    this.setState({ animated: !animated });
  };

  _onChangeHidden = () => {
    const { hidden } = this.state;
    this.setState({ hidden: !hidden });
  };

  _onChangeTransition = () => {
    this.showHideTransitionIndex += 1;
    this.setState({
      showHideTransition: getValue(
        showHideTransitions,
        this.showHideTransitionIndex,
      ),
    });
  };

  _onChangeBarStyle = () => {
    this.barStyleIndex += 1;
    this.setState({ barStyle: getValue(barStyles, this.barStyleIndex) });
  };

  _onChangeNetworkIndicatorVisible = () => {
    const { networkActivityIndicatorVisible } = this.state;
    this.setState({
      networkActivityIndicatorVisible: !networkActivityIndicatorVisible,
    });
  };

  render() {
    const {
      animated,
      barStyle,
      hidden,
      networkActivityIndicatorVisible,
      showHideTransition,
    } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={hidden}
          showHideTransition={showHideTransition}
          animated={animated}
          barStyle={barStyle}
          networkActivityIndicatorVisible={networkActivityIndicatorVisible}
        />
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this.onChangeHidden}
        >
          <View style={styles.button}>
            <Text>
              hidden:
              {hidden ? 'true' : 'false'}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this.onChangeAnimated}
        >
          <View style={styles.button}>
            <Text>
              animated (ios only):
              {animated ? 'true' : 'false'}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this.onChangeTransition}
        >
          <View style={styles.button}>
            <Text>
              showHideTransition (ios only):
              {' '}
              {getValue(showHideTransitions, this.showHideTransitionIndex)}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this.onChangeBarStyle}
        >
          <View style={styles.button}>
            <Text>
              style:
              {getValue(barStyles, this.barStyleIndex)}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this.onChangeNetworkIndicatorVisible}
        >
          <View style={styles.button}>
            <Text>
              networkActivityIndicatorVisible:
              {networkActivityIndicatorVisible ? 'true' : 'false'}
            </Text>
          </View>
        </TouchableHighlight>
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
  returnView: {
    height: 35,
  },
  slider: {
    height: 5,
    margin: 10,
    width: 250,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});

module.exports = StatusBarPage;
