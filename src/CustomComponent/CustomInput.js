import React,{useState} from 'react';
import { Text,TextInput,StyleSheet} from 'react-native';

const CustomInput = ({title, placeholder, type, size, maxlength, onChange }) => {
	const flag = type;
	
	const [state, setState] = useState({
		placeholder : placeholder
	})
	
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
	
	const onValueChange = (value) => {
		setState({
			...state,
			placeholder : ''
		})
		
		onChange(title, value)
	}
	
	return (
		<>
			<Text style={styles.placeholder} >
				{state.placeholder}
			</Text>
			<TextInput
				editable
				multiline={multiline}
				numberOfLines={size != undefined ? size : 0}
				maxLength={maxlength != undefined ? maxlength : 0}
				onChange={onValueChange}
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