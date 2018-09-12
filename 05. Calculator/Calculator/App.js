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
	Button,
	TouchableOpacity
} from 'react-native';

export default class App extends Component {
	
	constructor() {
		super()
		this.state = {
			resultText: "",
			calculationText: ""
		}

		this.operations = ['D', '+', '-', '*', '/']
	}

	calculateResult() {
		const text = this.state.resultText
		// need to follow BODMAS
		// Brackets -> Of -> Division -> Multiplication -> Addition -> Subtraction

		// eval() -> used to evaluate string with JS
		this.setState({
			calculationText: eval(text)
		})
	}
	
	validateText() {
		const text = this.state.resultText
		switch(text.slice(-1)){
			case '+':
			case '-':
			case '/':
			case '*':
				return false
		} 

		return true
	}

	numberPressed(text) {
		if (text == '=') {
			return this.validateText() && this.calculateResult()
		}

		this.setState({
			resultText: this.state.resultText + text
		})
	}

	operationsPressed(operation) {
		switch(operation){
			case 'D':
				let text = this.state.resultText.split('')
				text.pop()
				this.setState({
					resultText: text.join('')
				})
				break
			case '+':
			case '-':
			case '/':
			case '*':
				// this is to check, are we pressing multiple operations
				const lastChar = this.state.resultText.split('').pop()
				if (this.operations.indexOf(lastChar) > 0) return
				
				if (this.state.text == "") return
				this.setState({
					resultText: this.state.resultText + operation
				})
				break
		}
	}

	render() {
		// numbers view set
		let rows = []
		let numbers = [[1, 2, 3],[4, 5, 6],[7, 8, 9],['.', 0, '=']]
		for (let i = 0; i< 4; i++){
			let row = []
			for (let j = 0; j<3; j++){
				row.push(
					<TouchableOpacity key={numbers[i][j]} onPress={() => this.numberPressed(numbers[i][j])} style={styles.btn}>
						<Text style={styles.btnText}>{numbers[i][j]}</Text>
					</TouchableOpacity>
				) 
			} 

			rows.push(
				<View key={i} style={styles.row}>{row}</View>
			)
		}


		// operation view set
		let ops = []
		for (let i = 0; i < 5; i++){
			ops.push(
				<TouchableOpacity key={this.operations[i]} onPress={() => this.operationsPressed(this.operations[i])} style={styles.btn}>
						<Text style={[styles.btnText, styles.white]}>{this.operations[i]}</Text>
				</TouchableOpacity>
			)
		}


		return (
			<View style={styles.container}>
				<View style={styles.result}>
					<Text style={styles.resultText}>
						 {this.state.resultText}
					</Text>
				</View>

				<View style={styles.calculation}>
					<Text style={styles.calculationText}>{this.state.calculationText}</Text>
				</View>
				 
				<View style={styles.buttons}>
					<View style={styles.numbers}>
						{rows}
					</View>
					<View style={styles.operations}>
						{ops}
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	btn: {
		flex: 1,
		alignItems: 'center',
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	btnText: {
		fontSize: 25,
		color: 'white'
	},
	result: {
		flex: 2,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	resultText: {
		fontSize: 35,
		color:'black',
		margin: 8,
	},
	calculation: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center', 
		alignItems: 'flex-end',
	},
	calculationText: {
		fontSize: 25,
		color:'#999999',
		margin: 8,
	},
	buttons: {
		flex: 7,
		flexDirection: 'row',
	}, 
	numbers: {
		flex: 3,
		backgroundColor: '#434343',
	},
	operations: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'stretch',
		backgroundColor: '#636363'
	},
	white: {
		color: 'white'
	},
	row: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
	}
});
