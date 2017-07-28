/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Button from './component/Button'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BoardTest extends Component {
  constructor(props){
    super(props)
      this.state = {
          data: ''
      }

  }
    httpTest(){
        alert("들어옴")
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'test',
                password: 'test123',
            })
        })

            .then((response) => response.json())
            .then((responseData) => {
                console.log(
                    "POST Response",
                    "Response Body -> " + JSON.stringify(responseData)
                )
            }).done()

    }

    render() {
        return (
            <View>
              <Button
              onClick={()=>this.httpTest()}/>
            </View>
        )
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

AppRegistry.registerComponent('BoardTest', () => BoardTest);
