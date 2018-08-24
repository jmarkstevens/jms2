import React from 'react';
import {StatusBar, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const barStyles = ['default', 'light-content', 'dark-content'];

const showHideTransitions = ['fade', 'slide'];

function getValue<T>(values: Array<T>, index: number): T {
  return values[index % values.length];
}

class StatusBarPage extends React.Component {
  static navigationOptions = {title: 'StatusBar'};
  state = {
    animated: true,
    hidden: false,
    showHideTransition: getValue(showHideTransitions, 0),
    networkActivityIndicatorVisible: false
  };
  _showHideTransitionIndex = 0;
  _onChangeAnimated = () => {
    this.setState({animated: !this.state.animated});
  };
  _onChangeHidden = () => {
    this.setState({hidden: !this.state.hidden});
  };
  _onChangeTransition = () => {
    this._showHideTransitionIndex++;
    this.setState({
      showHideTransition: getValue(showHideTransitions, this._showHideTransitionIndex)
    });
  };
  _barStyleIndex = 0;
  _onChangeBarStyle = () => {
    this._barStyleIndex++;
    this.setState({barStyle: getValue(barStyles, this._barStyleIndex)});
  };
  _onChangeNetworkIndicatorVisible = () => {
    this.setState({
      networkActivityIndicatorVisible: !this.state.networkActivityIndicatorVisible
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={this.state.hidden}
          showHideTransition={this.state.showHideTransition}
          animated={this.state.animated}
          barStyle={this.state.barStyle}
          networkActivityIndicatorVisible={this.state.networkActivityIndicatorVisible}
        />
        <TouchableHighlight style={styles.wrapper} onPress={this._onChangeHidden}>
          <View style={styles.button}>
            <Text>hidden: {this.state.hidden ? 'true' : 'false'}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.wrapper} onPress={this._onChangeAnimated}>
          <View style={styles.button}>
            <Text>animated (ios only): {this.state.animated ? 'true' : 'false'}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.wrapper} onPress={this._onChangeTransition}>
          <View style={styles.button}>
            <Text>
              showHideTransition (ios only):
              '{getValue(showHideTransitions, this._showHideTransitionIndex)}'
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.wrapper} onPress={this._onChangeBarStyle}>
          <View style={styles.button}>
            <Text>style: '{getValue(barStyles, this._barStyleIndex)}'</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.wrapper} onPress={this._onChangeNetworkIndicatorVisible}>
          <View style={styles.button}>
            <Text>
              networkActivityIndicatorVisible:
              {this.state.networkActivityIndicatorVisible ? 'true' : 'false'}
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
    justifyContent: 'center'
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center'
  },
  returnView: {
    height: 35
  },
  slider: {
    height: 5,
    margin: 10,
    width: 250
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10
  },
  wrapper: {
    borderRadius: 5,
    marginBottom: 5
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    padding: 10
  }
});

module.exports = StatusBarPage;
