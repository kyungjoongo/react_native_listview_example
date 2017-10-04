import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Component1 from "./app/components/Component1/Component1";
import {Component2} from "./app/components/Component1/Component2";
import {ListViewDemo} from "./app/components/Component1/ListViewDemo";
import List from "./app/components/Component1/List";
import {HttpExample} from "./app/components/Component1/HttpExample";
import {SideMenu, SideMenuTest} from "./app/components/Component1/SideMenuTest";

export default class FirstPjt extends Component {
  render() {
    return (

      <HttpExample/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FirstPjt', () => FirstPjt);
