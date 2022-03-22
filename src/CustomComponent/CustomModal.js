import React from 'react';
import { Modal, Pressable, View, StyleSheet } from 'react-native';
import { ifIphoneX, getBottomSpace } from 'react-native-iphone-x-helper'

const CustomModal = (props) => {
	// type 값에 따른 형태 추가
	
	const type = props.type;
	
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
						<View style={{...styles.iosVersion, backgroundColor: '#FFFFFF'}}>
							{children} 
						</View>
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