import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/components/login';

const Application = StackNavigator({
    Home: { screen: Login },
    }, {
      navigationOptions: {
        header: false,
      }
    });

export default class App extends Component {
  render() {
    return (
        <Application />
    );
  }
}

const styles = StyleSheet.create({
  container: {
  
  },
});
