import { SideMenu, List, ListItem } from 'react-native-elements'
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import {HttpExample} from "./HttpExample";

export class SideMenuTest extends Component {


      constructor () {
            super()
            this.state = {
                  isOpen: false,
                  list: [
                        {
                              id: 0,
                              name: 'Ben',
                        },
                        {
                              id: 1,
                              name: 'Susan',
                        },
                        {
                              id: 2,
                              name: 'Robert',
                        },
                        {
                              id: 3,
                              name: 'Mary',
                        }
                  ]
            }
            this.toggleSideMenu = this.toggleSideMenu.bind(this)
      }

      onSideMenuChange (isOpen: boolean) {
            this.setState({
                  isOpen: isOpen
            })
      }

      toggleSideMenu () {
            this.setState({
                  isOpen: !this.state.isOpen
            })
      }

      render () {
            const MenuComponent = (
                  <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
                        <List containerStyle={{marginBottom: 20}}>
                              {
                                    this.state.list.map((item, index) => (
                                          <ListItem
                                                roundAvatar
                                                onPress={() => console.log('Pressed')}

                                                key={index}
                                                title={item.name}
                                                subtitle={item.name}
                                          />
                                    ))
                              }
                        </List>
                  </View>
            )

            return (
                  <SideMenu
                        isOpen={this.state.isOpen}
                        onChange={this.onSideMenuChange.bind(this)}
                        menu={MenuComponent}>
                        <List toggleSideMenu={this.toggleSideMenu.bind(this)} />
                  </SideMenu>
            )
      }
}
