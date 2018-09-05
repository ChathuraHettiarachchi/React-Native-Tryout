/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
	Platform, 
	StyleSheet, 
	Text, 
	View,
	TextInput,
	Button
} from 'react-native';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

export default class App extends Component {

	constructor() {
		super()
		this.state = {
			value: ""
		}
		this.handleChangeText = this.handleChangeText.bind(this)
	}

	handleChangeText(newText) {
		this.setState({
			value: newText
		})
	}

	onLoginPressed(){

	}

	render() {
		return (
			<View style={styles.container}>

				<View style={styles.halfTop}>
				
					<Text style={styles.welcome}>Welcome to React Native!</Text>
					<Text style={styles.normalText}>It's Choota here</Text>

				</View>

				<View style={styles.halfBottom}>

					<View style={styles.alignBottom}>
						
						<Text style={styles.userNamePass}>Username</Text>
						<TextInput style={styles.inputArea}
							defaultValue={this.state.value}
							onChangeText={this.handleChangeText}
						/>

						<Text style={styles.userNamePass}>Password</Text>
						<TextInput style={styles.inputArea}
							defaultValue={this.state.value}
							onChangeText={this.handleChangeText}
						/>

						<Button style={styles.loginButton}
							onPress={this.onLoginPressed}
							title="Login"
						/>
					</View>

				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		color: '#ffffff',
		marginTop: 30,
	},
	normalText: {
		fontSize: 12,
		textAlign: 'center',
		color: '#ffffff',
		marginTop: 10,
	},
	userNamePass: {
		fontSize: 12,
		color: '#ffffff',
		marginTop: 10,
		marginLeft: 16,
	},
	alignBottom: {
		flex: 1,
		bottom: 0
	},
	halfTop: {
		flex: 2,
		backgroundColor: '#002245',
	},
	halfBottom: {
		flex: 1,
		backgroundColor: '#4484ff',
	},
	inputArea: {
		height: 40,
		marginTop: 4,
		marginLeft: 16,
		marginRight: 16,
		paddingLeft: 8,
		paddingRight: 8,
		backgroundColor: 'white',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'black'
	},
	loginButton: {
		height: 40,
		marginTop: 4,
		marginLeft: 16,
		marginRight: 16,
		backgroundColor: '#002245',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'black'
	}

});
