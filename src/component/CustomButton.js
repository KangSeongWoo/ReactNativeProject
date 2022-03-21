import React from 'react';
import { Pressable,Text,View,StyleSheet} from 'react-native';

const CustomButton = ({ buttonBackgroudColor, buttonBorderColor, buttonBorderWidth, textColor, title, onPress}) => {
	return (
		<View style={{ ...styles.button, backgroundColor: buttonBackgroudColor, borderColor :buttonBorderColor, borderWidth:buttonBorderWidth}}>
				<Pressable onPress={() => onPress()}>
				<Text style={{ ...styles.text, color: textColor }}>{title}</Text>
				</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		flex: 1,
		margin: 8,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold'
	}
})

export default CustomButton;