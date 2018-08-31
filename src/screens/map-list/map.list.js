import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  Switch,
} from 'react-native';
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';

import DisplayLatLng from '../../components/map-examples/DisplayLatLng';
import ViewsAsMarkers from '../../components/map-examples/ViewsAsMarkers';
import EventListener from '../../components/map-examples/EventListener';
import MarkerTypes from '../../components/map-examples/MarkerTypes';
import DraggableMarkers from '../../components/map-examples/DraggableMarkers';
import PolygonCreator from '../../components/map-examples/PolygonCreator';
import PolylineCreator from '../../components/map-examples/PolylineCreator';
import GradientPolylines from '../../components/map-examples/GradientPolylines';
import AnimatedViews from '../../components/map-examples/AnimatedViews';
import AnimatedMarkers from '../../components/map-examples/AnimatedMarkers';
import Callouts from '../../components/map-examples/Callouts';
import Overlays from '../../components/map-examples/Overlays';
import DefaultMarkers from '../../components/map-examples/DefaultMarkers';
import CustomMarkers from '../../components/map-examples/CustomMarkers';
import CachedMap from '../../components/map-examples/CachedMap';
import LoadingMap from '../../components/map-examples/LoadingMap';
import TakeSnapshot from '../../components/map-examples/TakeSnapshot';
import FitToSuppliedMarkers from '../../components/map-examples/FitToSuppliedMarkers';
import FitToCoordinates from '../../components/map-examples/FitToCoordinates';
import LiteMapView from '../../components/map-examples/LiteMapView';
import CustomTiles from '../../components/map-examples/CustomTiles';
import ZIndexMarkers from '../../components/map-examples/ZIndexMarkers';
import StaticMap from '../../components/map-examples/StaticMap';
import MapStyle from '../../components/map-examples/MapStyle';
import LegalLabel from '../../components/map-examples/LegalLabel';
import SetNativePropsOverlays from '../../components/map-examples/SetNativePropsOverlays';
import CustomOverlay from '../../components/map-examples/CustomOverlay';
import MapKml from '../../components/map-examples/MapKml';
import BugMarkerWontUpdate from '../../components/map-examples/BugMarkerWontUpdate';
import ImageOverlayWithAssets from '../../components/map-examples/ImageOverlayWithAssets';
import ImageOverlayWithURL from '../../components/map-examples/ImageOverlayWithURL';
import AnimatedNavigation from '../../components/map-examples/AnimatedNavigation';
import OnPoiClick from '../../components/map-examples/OnPoiClick';
import PriceMarkers from '../../components/map-examples/markers-page/markers.page';

import styles from './map.list.styles';

const IOS = Platform.OS === 'ios';
const ANDROID = Platform.OS === 'android';

const listAll = [
  // [<component>, <component description>, <Google compatible>, <Google add'l description>]
  [PriceMarkers, 'PriceMarkers', true],
  [StaticMap, 'StaticMap', true],
  [DisplayLatLng, 'Tracking Position', true, '(incomplete)'],
  [ViewsAsMarkers, 'Arbitrary Views as Markers', true],
  [EventListener, 'Events', true, '(incomplete)'],
  [MarkerTypes, 'Image Based Markers', true],
  [DraggableMarkers, 'Draggable Markers', true],
  [PolygonCreator, 'Polygon Creator', true],
  [PolylineCreator, 'Polyline Creator', true],
  [GradientPolylines, 'Gradient Polylines', true],
  [AnimatedViews, 'Animating with MapViews'],
  [AnimatedMarkers, 'Animated Marker Position'],
  [Callouts, 'Custom Callouts', true],
  [Overlays, 'Circles, Polygons, and Polylines', true],
  [DefaultMarkers, 'Default Markers', true],
  [CustomMarkers, 'Custom Markers', true],
  [TakeSnapshot, 'Take Snapshot', true, '(incomplete)'],
  [CachedMap, 'Cached Map'],
  [LoadingMap, 'Map with loading'],
  [FitToSuppliedMarkers, 'Focus Map On Markers', true],
  [FitToCoordinates, 'Fit Map To Coordinates', true],
  [LiteMapView, 'Android Lite MapView'],
  [CustomTiles, 'Custom Tiles', true],
  [ZIndexMarkers, 'Position Markers with Z-index', true],
  [MapStyle, 'Customize the style of the map', true],
  [LegalLabel, 'Reposition the legal label', true],
  [SetNativePropsOverlays, 'Update native props', true],
  [CustomOverlay, 'Custom Overlay Component', true],
  [MapKml, 'Load Map with KML', true],
  [BugMarkerWontUpdate, "BUG: Marker Won't Update (Android)", true],
  [ImageOverlayWithAssets, 'Image Overlay Component with Assets', true],
  [ImageOverlayWithURL, 'Image Overlay Component with URL', true],
  [AnimatedNavigation, 'Animated Map Navigation', true],
  [OnPoiClick, 'On Poi Click', true],
];

const listOne = [
  [PriceMarkers, 'PriceMarkers', true],
  [StaticMap, 'StaticMap', true],
  [ViewsAsMarkers, 'Arbitrary Views as Markers', true],
  [MarkerTypes, 'Image Based Markers', true],
  [Callouts, 'Custom Callouts', true],
  [DefaultMarkers, 'Default Markers', true],
  [CustomMarkers, 'Custom Markers', true],
  [FitToSuppliedMarkers, 'Focus Map On Markers', true],
  [FitToCoordinates, 'Fit Map To Coordinates', true],
  [ZIndexMarkers, 'Position Markers with Z-index', true],
  [MapStyle, 'Customize the style of the map', true],
  [LegalLabel, 'Reposition the legal label', true],
];

const viewLists = [listOne, listAll];

function makeExampleMapper(useGoogleMaps) {
  if (useGoogleMaps) {
    return example => [
      example[0],
      [example[1], example[3]].filter(Boolean).join(' '),
    ];
  }
  return example => example;
}

class ListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Component: null,
      useGoogleMaps: ANDROID,
    };
  }

  renderExample([Component, title]) {
    return (
      <TouchableOpacity
        key={title}
        style={styles.button}
        onPress={() => this.setState({ Component })}
      >
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  }

  renderBackButton() {
    return (
      <TouchableOpacity
        style={styles.back}
        onPress={() => this.setState({ Component: null })}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>&larr;</Text>
      </TouchableOpacity>
    );
  }

  renderGoogleSwitch() {
    const { useGoogleMaps } = this.state;
    return (
      <View>
        <Text>Use GoogleMaps?</Text>
        <Switch
          onValueChange={value => this.setState({ useGoogleMaps: value })}
          style={{ marginBottom: 10 }}
          value={useGoogleMaps}
        />
      </View>
    );
  }

  renderExamples(examples) {
    const { Component, useGoogleMaps } = this.state;
    return (
      <View style={styles.container}>
        {Component && (
          <Component
            provider={useGoogleMaps ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
          />
        )}
        {Component && this.renderBackButton()}
        {!Component && (
          <ScrollView
            style={StyleSheet.absoluteFill}
            contentContainerStyle={styles.scrollview}
            showsVerticalScrollIndicator={false}
          >
            {IOS && this.renderGoogleSwitch()}
            {examples.map(example => this.renderExample(example))}
          </ScrollView>
        )}
      </View>
    );
  }

  render() {
    const { useGoogleMaps } = this.state;
    const { listNbr } = this.props;
    const viewList = viewLists[listNbr];
    return this.renderExamples(
      viewList
        // Filter out examples that are not yet supported for Google Maps on iOS.
        .filter(example => ANDROID || (IOS && (example[2] || !useGoogleMaps)))
        .map(makeExampleMapper(IOS && useGoogleMaps)),
    );
  }
}

ListScreen.propTypes = {
  listNbr: PropTypes.number,
};

ListScreen.defaultProps = {
  listNbr: 0,
};

export default ListScreen;
