/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

export default class Login extends Component {
  render() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="light-content"/>
			<KeyboardAvoidingView behavior='padding' style={styles.container} >
				<TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
					<View style={styles.container}>
						
						<View style={styles.logoContainer}>
							<Image style={styles.logo} source={require("../images/logo.png")} />
							<Text style={styles.title}>ThinkItUp Platform</Text>
						</View>

						<View style={styles.infoContainer}>
							<TextInput style={styles.input}
								placeholder="Enter username/email"
								placeholderTextColor='rgba(255,255,255,0.8)'
								keyboardType='email-address'
								returnKeyType='next'
								autoCorrect={false}
								onSubmitEditing={()=> this.refs.txtPassword.focus()}
							/>

							<TextInput style={styles.input}
								placeholder="Enter password"
								placeholderTextColor='rgba(255,255,255,0.8)'
								secureTextEntry
								returnKeyType='go'
								autoCorrect={false}
								ref="txtPassword"
							/>

							<TouchableOpacity style={styles.buttonContainer}>
								<Text  style={styles.buttonText} >SING IN</Text>
							</TouchableOpacity>
						</View>
					</View>
				</TouchableWithoutFeedback>		
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
  }
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	flexDirection: "column",
	backgroundColor: "rgb(32, 53, 70)"
  },
  title: {
	fontSize: 18,
	textAlign: "center",
	margin: 8,
	color: "#f7c744",
	opacity: 0.8
  },
  logoContainer: {
	flex: 1,
	marginTop: 80,
	alignItems: "center"
  },
  logo: {
	width: 120,
	height: 120
  },
  infoContainer: {
	position: "absolute",
	right: 0,
	left: 0,
	bottom: 0,
	padding: 20,
	height: 200,
  },
  input: {
	height: 40,
	backgroundColor: 'rgba(255,255,255,0.2)',
	color: 'white',
	paddingHorizontal: 10,
	marginBottom: 10,
  },
  buttonContainer: {
	backgroundColor: '#f7c744',
	height: 40,
	justifyContent: 'center',
	alignItems: 'center'
  },
  buttonText: {
	color: 'rgb(32, 53, 70)',
	fontWeight: 'bold',
	fontSize: 18
  }
});
