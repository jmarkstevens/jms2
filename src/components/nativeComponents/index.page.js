import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

const menuList = [
  { key: 'ac', text: 'ActivityIndicator' },
  { key: 'bu', text: 'Button' },
  { key: 'mo', text: 'Modal' },
  { key: 'pi', text: 'Picker' },
  { key: 'sc', text: 'ScrollView' },
  { key: 'sl', text: 'Slider' },
  { key: 'st', text: 'StatusBar' },
  { key: 'we', text: 'WebView' },
];

class IndexPage extends React.Component {
  static navigationOptions = { title: 'Index' };

  render() {
    const { navigate } = this.props.navigation;
    const items = menuList.map(item => (
      <TouchableOpacity
        key={item.key}
        onPress={() => navigate(item.key)}
        style={styles.navBarButton}
      >
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    ));
    return <View style={styles.container}>{items}</View>;
  }
}

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarButton: {},
  navBarButtonText: {
    color: '#000',
  },
});
