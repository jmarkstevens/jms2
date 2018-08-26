import React from 'react';
// import PropTypes from 'prop-types';
import { createBottomTabNavigator } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ListPage from '../screens/list.screen';
import NativeComponents from '../screens/native.components.screen';
import GraphqlScreen from '../screens/graphql.screen';

const listOne = () => <ListPage listNbr={0} />;

const listAll = () => <ListPage listNbr={1} />;

export default createBottomTabNavigator(
  {
    Map: listOne,
    All: listAll,
    Native: NativeComponents,
    Graphql: GraphqlScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => { // eslint-disable-line
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
        return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#4CD964',
      inactiveTintColor: 'gray',
    },
  },
);
