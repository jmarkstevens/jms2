// tslint:disable-next-line:import-name
import PropTypes from 'prop-types';
import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const PriceMarker = ({ amount }) => {
  const bkColor = '#000';
  return (
    <View style={styles.container}>
      <View style={[styles.bubble, { backgroundColor: bkColor }]}>
        <Text style={styles.insidek}>{amount}k</Text>
      </View>
      <View style={[styles.arrow, { borderTopColor: bkColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 6,
    borderColor: 'transparent',
    alignSelf: 'center',
    marginTop: -0.5,
  },
  bubble: {
    borderRadius: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
  },
  container: {
    height: 25.3,
  },
  insidek: {
    color: '#fff',
    // fontFamily: 'BrandonGrotesque',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    height: 22,
    letterSpacing: 0,
    lineHeight: 18,
    textAlign: 'center',
  },
});

PriceMarker.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default PriceMarker;
