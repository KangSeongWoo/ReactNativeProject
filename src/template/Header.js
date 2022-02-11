import React, { useState } from 'react';
import { Dimensions,Text, StyleSheet, View} from 'react-native';

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>Memo</Text>
		</View>
	)
}

const styles = StyleSheet.create({
  header: {
		flex: 1,
    paddingLeft: 20,
		width : Dimensions.get('screen').width,
    justifyContent: "center",
		backgroundColor : 'white'
	},
	text: {
		fontSize : 20
	}
});

export default Header