import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

function onButtonPress(id) {
  Alert.alert('Alert', `You clicked the ${id.target} button`);
}

export default class ButtonPage extends React.Component {
  static navigationOptions = { title: 'Button' };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={onButtonPress}
          title="Press Me"
          accessibilityLabel="See an informative alert"
        />
        <Button
          onPress={onButtonPress}
          title="Press Purple"
          color="#841584"
          accessibilityLabel="Learn more about purple"
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            onPress={onButtonPress}
            title="This looks great!"
            accessibilityLabel="This sounds great!"
          />
          <Button
            onPress={onButtonPress}
            title="Ok!"
            color="#841584"
            accessibilityLabel="Ok, Great!"
          />
        </View>
        <Button
          disabled
          onPress={onButtonPress}
          title="I Am Disabled"
          accessibilityLabel="See an informative alert"
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
  returnView: {
    height: 35,
  },
});
