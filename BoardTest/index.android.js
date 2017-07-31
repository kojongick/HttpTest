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
  constructor(props) {
      super(props)
      this.state = {
          data: "jje9302",
          name: "asdf",
          uri: "6_1_1"
      }
  }

      httpTest(){

        alert("들어옴")
          var headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }

          var params = {
              id:"jje9302",
              name: 'test@gmail.com',
              
          };
          var url = "http://49.161.111.188:8080/boards"
          var formData = new FormData();

        for (var k in params) {
            formData.append(k, params[k]);
        }

        var request = {
            method: 'POST',
            headers: headers,
            body: formData
        };

        fetch(url, request)



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
