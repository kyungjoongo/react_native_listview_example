import React, { Component } from 'react';
import { WebView, AppRegistry,  StyleSheet,  Text,  View} from 'react-native';

export class Component2 extends Component {
      render() {
            return (
                  <WebView
                        source={{uri: 'https://github.com/facebook/react-native'}}
                        style={{marginTop: 20}}
                  />
            );
      }
}

AppRegistry.registerComponent('Component2', () => Component2);
