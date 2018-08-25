import React from 'react';
// import PropTypes from 'prop-types';
import { createBottomTabNavigator } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ListPage from './list.page';

const listOne = () => <ListPage listNbr={0} />;

const listAll = () => <ListPage listNbr={1} />;

export default createBottomTabNavigator(
  {
    Map: listOne,
    All: listAll,
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
