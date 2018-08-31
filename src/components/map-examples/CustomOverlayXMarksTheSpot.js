import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Polygon, Polyline, Marker } from 'react-native-maps';

const XMarksTheSpot = props => (
  <View>
    <Polygon
      coordinates={props.coordinates}
      strokeColor="rgba(0, 0, 0, 1)"
      strokeWidth={3}
    />
    <Polyline
      coordinates={[props.coordinates[0], props.coordinates[2]]}
    />
    <Polyline
      coordinates={[props.coordinates[1], props.coordinates[3]]}
    />
    <Marker coordinate={props.center} />
  </View>
);

XMarksTheSpot.propTypes = {
  coordinates: PropTypes.array,
  center: PropTypes.object,
  zIndex: PropTypes.number,
};

export default XMarksTheSpot;
