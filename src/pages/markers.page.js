import * as React from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// tslint:disable-next-line:import-name
import MapView, { Marker } from 'react-native-maps';

import PriceMarker from '../markers/PriceMarker';
import styles from './markers.style';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomArbitrary() {
  return Math.floor(Math.random() * (1500 - 500) + 500);
}

class DefaultMarkers extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
    };
  }

  onMapPress(e: any) {
    const { markers } = this.state;
    this.setState({
      markers: [
        ...markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id += 1,
          color: randomColor(),
          amount: getRandomArbitrary(),
        },
      ],
    });
  }

  render() {
    const { markers, region } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={region}
          onPress={e => this.onMapPress(e)}
        >
          {markers.map((marker: any) => (
            <Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
            >
              <PriceMarker amount={marker.amount} />
            </Marker>
          ))}
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ markers: [] })}
            style={styles.bubble}
          >
            <Text>Tap to clear markers</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DefaultMarkers;
