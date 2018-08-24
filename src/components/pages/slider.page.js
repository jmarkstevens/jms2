import React from 'react';
import {Slider, StyleSheet, Text, View} from 'react-native';

class SliderPage extends React.Component {
  static navigationOptions = {title: 'Slider'};
  state = {
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0
  };
  handleValueChange = (key: string, value: number) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.state.value1}
        </Text>
        <Slider
          value={0}
          minimumValue={0}
          maximumValue={20}
          onValueChange={value => this.handleValueChange('value1', value)}
          step={1}
          style={styles.slider}
        />
        <Text style={styles.text}>
          {this.state.value2}
        </Text>
        <Slider
          value={0}
          minimumValue={0}
          maximumValue={20}
          minimumTrackTintColor={'red'}
          maximumTrackTintColor={'green'}
          onValueChange={value => this.handleValueChange('value2', value)}
          step={1}
          style={styles.slider}
        />
        <Text style={styles.text}>
          {this.state.value3}
        </Text>
        <Slider
          value={0}
          minimumValue={0}
          maximumValue={20}
          onValueChange={value => this.handleValueChange('value3', value)}
          step={1}
          style={styles.slider}
          thumbImage={require('../../img/SLogoS4-24.png')}
          trackImage={require('../../img/slider.png')}
        />
        <Text style={styles.text}>
          {this.state.value4}
        </Text>
        <Slider
          value={0}
          minimumValue={0}
          maximumValue={20}
          minimumTrackImage={require('../../img/slider-left.png')}
          maximumTrackImage={require('../../img/slider-right.png')}
          onValueChange={value => this.handleValueChange('value4', value)}
          step={1}
          style={styles.slider}
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
  }
});

module.exports = SliderPage;
