import React from 'react';
import { View, ListView, StyleSheet, Text, AppRegistry } from 'react-native';


export class ListViewDemo extends React.Component {
      constructor(props) {
            super(props);

            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.state = {
                  dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row3', 'row4', 'ropw5rr']),
            };
      }
      render() {
            return (
                  <ListView
                        style={styles.container}
                        dataSource={this.state.dataSource}
                        renderRow={(data) => <View ><Text style={styles.bigblue}>{data}</Text></View>}
                  />
            );
      }
}


const styles = StyleSheet.create({
      container: {
            flex: 1,
            marginTop: 20,
      },
      bigblue: {
            color: 'blue',
            fontWeight: 'bold',
            fontSize: 30,
      }
});


AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
