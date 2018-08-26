import React from 'react';
import { StyleSheet, WebView, Platform } from 'react-native';

const HtmlCode = '<h1> h1 Heading Tag</h1>'
  + '<p> Sample Paragraph Tag </p>'
  + '<img src="https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png" alt="Image" width="250" height="150" >';

const styles = StyleSheet.create({
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

const MapView = () => (
  <WebView
    style={styles.WebViewStyle}
    source={{ html: HtmlCode }}
    originWhitelist={['*']}
  />
);

export default MapView;
