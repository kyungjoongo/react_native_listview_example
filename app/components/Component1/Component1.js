/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
      AppRegistry,
      StyleSheet,
      Text,
      View,
      Button,
      TextInput,
      ListView,
      Image,
      Alert
} from 'react-native';

import Toast from 'react-native-simple-toast';

export default class Component1 extends Component {

      constructor() {
            super();
            this.state = {
                  name: 'kyungjoon',
                  text : ''
            }

            Toast.show('this is toast');

      }

      onPressLearnMore(){
            Toast.show('this is toast');
      }

      onPressLearnMore2(){
            Toast.show('거경즌 천재님이십니다SLDFKLSDKFLSDKFLKDS is toast');
      }

      showAlert() {

            Alert.alert(
                  'Alert Title',
                  'My Alert Msg',
                  [
                        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
            )
      }

      render() {

            let pic = {
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
            };


            return (
                  <View style={styles.container}>
                        <Text style={styles.bigblue}>
                              {this.props.message}
                              {this.state.name}
                        </Text>
                        <Button
                              onPress={this.showAlert}
                              title="Learn More"
                              color="#841584"
                              accessibilityLabel="Learn more about this purple button"
                        />

                        <Button
                              onPress={this.onPressLearnMore2}
                              title="TESETSDFSDFSDF More"
                              color="green"
                              accessibilityLabel="Learn more about this purple button"
                        />

                  </View>
            );
      }
}

const styles = StyleSheet.create({
      bigblue: {
            color: 'blue',
            fontWeight: 'bold',
            fontSize: 30,
      },
      red: {
            color: 'red',
      },
});

AppRegistry.registerComponent('Component1', () => Component1);
