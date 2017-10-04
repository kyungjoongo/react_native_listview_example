import React, {Component} from 'react'
import {Text, View, TouchableOpacity, StyleSheet, ScrollView, AppRegistry} from 'react-native'
export class HttpExample extends Component {
      state = {
            data: []
      };


      componentDidMount = () => {
            fetch('http://35.194.71.159:8080/rest/getList', {
                  method: 'GET'
            })
                  .then((response) => response.json())
                  .then((responseJson) => {
                        console.log(responseJson);
                        this.setState({
                              data: responseJson.arrList
                        })
                  })
                  .catch((error) => {
                        console.error(error);
                  });
      };

      alertItem(item) {

            alert(item.content);

      }

      render() {
            return (
                  <ScrollView contentContainerStyle={styles.contentContainer}>
                        {

                              this.state.data.map((item, index) => (
                                    <TouchableOpacity style={styles.container} key={item.id}
                                                      onPress={() => this.alertItem(item)}>

                                          <Text style={styles.text}>
                                                {/*{item.id}*/} {item.content}
                                          </Text>
                                    </TouchableOpacity>
                              ))

                        }
                  </ScrollView>
            )
      }
}


const styles = StyleSheet.create({
      container: {
            padding: 10,
            marginTop: 3,
            backgroundColor: '#78f9b1',
            alignItems: 'center',
      },
      text: {
            color: '#3f3f3f'
      },
      contentContainer: {
            paddingVertical: 20
      }
});

AppRegistry.registerComponent('HttpExample', () => HttpExample);