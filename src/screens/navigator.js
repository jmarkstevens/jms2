import React from 'react';
// import PropTypes from 'prop-types';
import { createBottomTabNavigator } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MapList from './map-list/map.list';
import NativeComponents from './native-components/native.components';
import GraphqlScreen from './graphql/graphql';
import { testProperties } from '../config/TestProperties';

const listOne = () => <MapList listNbr={0} />;
const listAll = () => <MapList listNbr={1} />;

export default createBottomTabNavigator(
  {
    Maps: listOne,
    All: listAll,
    Native: NativeComponents,
    Graphql: GraphqlScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarTestIDProps: {
        ...testProperties(navigation.state.routeName),
      },
      tabBarIcon: ({ focused, tintColor }) => {
        // eslint-disable-line
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Map') {
          iconName = 'map-marker-outline';
        } else if (routeName === 'All') {
          iconName = 'map-marker-radius';
        } else if (routeName === 'Native') {
          iconName = 'nativescript';
        } else if (routeName === 'Graphql') {
          iconName = 'graphql';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <MaterialCommunityIcons
            name={iconName}
            size={25}
            color={tintColor}
            {...testProperties(routeName)}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: '#4CD964',
      inactiveTintColor: 'gray',
    },
  },
);
