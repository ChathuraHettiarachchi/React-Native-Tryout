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
	FlatList,
	Image,
	ActivityIndicator,
	TouchableOpacity,
	ToastAndroid
} from "react-native";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			dataSource: [],
			isLoading: true
		};
	}

	renderItem = ({ item }) => {
		return (
			<TouchableOpacity style={styles.row} onPress={() => ToastAndroid.show(item.book_title, ToastAndroid.SHORT)}>
				<Image style={styles.image} source={{ uri: item.image }} />
				<View style={styles.authorData}>
					<Text>{item.book_title}</Text>
					<Text>{item.author}</Text>
				</View>
			</TouchableOpacity>
		)
	};

	componentDidMount() {
		const url = 'https://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'

		fetch(url)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					dataSource: responseJson.book_array,
					isLoading: false
				});
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {

		const indicator = 	<View style={styles.activityIndicatorParent}>
								<ActivityIndicator 
									size="large"
									color="#330066"
									animating
								/>
							</View>

		const renderList = 	<View style={styles.container}>
								<FlatList 
									data={this.state.dataSource} 
									renderItem={this.renderItem} 
									keyExtractor={(item, index) => index}
								/>
							</View>

		return (
			this.state.isLoading ? indicator : renderList
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5FCFF"
	},
	image: {
		height: 100,
		width: 60
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		marginBottom: 3,
	},
	authorData: {
		flex: 1,
		margin: 8,
	},
	activityIndicatorParent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	
});
