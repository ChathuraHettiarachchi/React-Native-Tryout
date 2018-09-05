/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<> {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.half1}>
        </View>

        <View style={styles.half2}>

          <View style={styles.half3}>
            <View style={styles.half5}></View>
            <View style={styles.half6}></View>
            <View style={styles.half7}></View>
          </View>

          <View style={styles.half4}></View>

        </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  half1: {
    flex: 1, 
    backgroundColor: '#002245'
  },
  half2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#4484ff'
  },
  half3: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#cd6eff'
  },
  half4: {
    flex: 1,
    backgroundColor: '#ff226e'
  },
  half5: {
    flex: 1,
    backgroundColor: '#4484ff'
  },
  half6: {
    flex: 2,
    backgroundColor: '#333333'
  },
  half7: {
    flex: 1,
    backgroundColor: '#d48686'
  }
});
