/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hello, This is Splash Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    }
  });
  