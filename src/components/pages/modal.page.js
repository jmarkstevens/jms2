import React from 'react';
import {Modal, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

class ModalPage extends React.Component {
  static navigationOptions = {title: 'Modal'};
  state = {modalVisible: false};
  setModalVisible = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View style={styles.innerContainer}>
            <View>
              <Text>Hello World!</Text>
              <TouchableHighlight onPress={this.setModalVisible}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight onPress={this.setModalVisible}>
          <Text>Show Modal</Text>
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
  }
});

module.exports = ModalPage;
