import React, {Component} from 'react';
import {View, Platform} from 'react-native';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const MenuNavigator2 = createStackNavigator({
  Menu: {screen: Menu},
  Dishdetail: {screen: Dishdetail}
},
{
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#512DA8'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff'
    }
  }
}
);

const MenuNavigator = createAppContainer(MenuNavigator2);

class Main extends Component {

  render() {
    return (
      <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0: Expo.Constants.statusBarHeight}}>
        <MenuNavigator />
      </View>
    );
  }
}

export default Main;
