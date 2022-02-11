import React, { useState } from 'react';
import { Dimensions, Text, StyleSheet, View } from 'react-native';

const Footer = () => {
	const [isVisible, setIsVisible] = useState(false)
	const openPopup = () => {
		setIsVisible(!isVisible)
	}
	
	return (
		<View>
			<Text>여기는 Footer 입니다.</Text>
		</View>
	)
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
		alignItems: 'center',
		width : Dimensions.get('screen').width ,
    justifyContent: 'center',
		backgroundColor: 'white',
		borderWidth : 3,
		borderColor: 'rgb(205, 210, 215)',
  },
  title: {
		fontSize: 15,
  },
});

export default Footer