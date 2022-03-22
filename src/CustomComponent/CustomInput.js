import React from 'react';
import { Text,TextInput,StyleSheet} from 'react-native';

const CustomInput = ({ placeholder, type, size, maxlength }) => {
	const flag = type;
	
	let borderColor = ''
	let borderBottomColor = ''
	let borderRadius = ''
	let multiline = false
	
	if (flag == 'singleline') {
		borderColor = '#FFFFFF'
		borderRadius = 0
		multiline = false
	} else if (flag == 'multiline'){
		borderColor = '#2CDFB1'
		borderRadius = 10
		multiline = true
	} else {
		borderColor = '#FFFFFF'
		borderRadius = 0
		multiline = false
	}
	
	return (
		<>
			<Text style={styles.placeholder} >
				{placeholder}
			</Text>
			<TextInput
				editable
				multiline={multiline}
				numberOfLines={size != undefined ? size : 0}
				maxLength={maxlength != undefined ? maxlength : 0}
				style={{
					...styles.textinput,
          borderColor : borderColor,
					borderRadius: borderRadius,
				}}
      />
		</>
	)
}

const styles = StyleSheet.create({
	placeholder: {
		position: 'relative',
		top: 44,
		left : 25
	},
	textinput: {
		borderBottomColor: '#2CDFB1',
		borderWidth: 1,
		margin: 10,
		zIndex : 10
	}
})

export default CustomInput;