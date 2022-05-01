import React, { useEffect, useState } from 'react';
import { Modal, Pressable, View, StyleSheet,KeyboardAvoidingView,Platform,Keyboard } from 'react-native';
import { ifIphoneX, getBottomSpace } from 'react-native-iphone-x-helper'

const CustomModal = (props) => {
	// type 값에 따른 형태 추가
	
	const type = props.type;
	const [state, setState] = useState({
		adjustSize : 0
	})

	let justifyContent = '';
	let padding = 0
	
	if (type == 'type1') {
		justifyContent = 'flex-start'
		padding = 0
	} else if (type == 'type2') {
		justifyContent = 'center'
		padding = 10
	} else if (type == 'type3') {
		justifyContent = 'flex-end'
		padding = 0
	} else {
		justifyContent = 'center'
		padding = 10
	}

	useEffect(() => {
		Keyboard.addListener("keyboardDidHide", () => {
			setState({
				...state,
				adjustSize : -30
			})
			Keyboard.dismiss();
		})
	},[])
	
	const { children } = props;
	
	if (props.children != undefined) {
		const { isVisible, setIsVisible } = props.children.props;
		
		const closePopup = () => {
			if (setIsVisible != undefined) {
				setIsVisible(!isVisible);
			}
		}
			
		return (
			<Modal
				visible={isVisible != undefined ? isVisible : false}
				animationType={"fade"}
				transparent
				statusBarTranslucent
			>
					<Pressable onPress={closePopup} style={{...styles.dimArea, justifyContent:justifyContent,padding:padding}}>
						<KeyboardAvoidingView 
							behavior={Platform.OS === "ios" ? "padding" : "position"}
							keyboardVerticalOffset={Platform.select({android: state.adjustSize})}
							enabled
						>
							<View style={{...styles.iosVersion, backgroundColor: '#FFFFFF'}}>
								{children} 
							</View>
						</KeyboardAvoidingView>
					</Pressable>
			</Modal>
		)
	} else {
		return (<></>)	
	}
} 

const styles = StyleSheet.create({
	dimArea: {
		flex:1,
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
	},
	iosVersion: {
		...ifIphoneX({
			paddingBottom: getBottomSpace()
		}, {
			paddingBottom: 0
		})
	}
})

export default CustomModal