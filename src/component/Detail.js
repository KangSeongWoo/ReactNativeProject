import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, FlatList, TouchableOpacity,Modal,Animated,Text,TouchableWithoutFeedback,TextInput,Alert } from 'react-native';

const Detail = ({ isVisible, setIsVisible }) => {
	const closePopup = () => {
        setIsVisible(!isVisible);
    }
	return (
		<Modal
			visible={isVisible}
			animationType={"fade"}
			transparent
			statusBarTranslucent
		>
			<View style={styles.dim}>
				<View style={styles.overlay}>
						<TouchableWithoutFeedback onPress={closePopup}>
								<View/>
						</TouchableWithoutFeedback>
					<Animated.View style={{ ...styles.bottomSheetContainer }}>
						<View style={{flex:1}}>
							<View style={styles.title}>
								<TextInput
										placeholder='제목을 입력'
										editable
										maxLength={20}
								/>
							</View>
							<View	style={styles.content}>
									<TextInput
											placeholder='내용을 입력'
											multiline
											numberOfLines={4}
											editable
											maxLength={100}
									/>
							</View>
							<View style={styles.buttonArea}>
								<View style={styles.button}>
									<TouchableOpacity onPress={() => Alert.alert("취소 버튼이 눌렸습니다.")}>
											<Text style={styles.textComponent}>Cancel</Text>
									</TouchableOpacity>
								</View>
								<View style={styles.button}>
									<TouchableOpacity onPress={() => Alert.alert("저장 버튼이 눌렸습니다.")}>
											<Text style={styles.textComponent}>Save</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</Animated.View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	dim: {
		height : '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		alignItems: 'center',
		justifyContent: "center",
	},
	overlay: {
		borderColor: 'red',
		borderWidth: 1,
		width: Dimensions.get('screen').width * 0.9,
		height: Dimensions.get('screen').height * 0.6,
		backgroundColor: '#FFFFFF',
		padding : 10
	},
	buttonArea: {
		flex:1,
		borderColor: 'red',
		borderWidth: 1,
		marginTop : 10,
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	button: {
		borderColor: 'red',
		borderWidth: 1,
		width: '50%',
		justifyContent: "center",
		alignItems: 'center',
		height : 40
	},	
	title: {
		flex:1,
		borderColor: 'red',
		borderWidth: 1,
		borderBottomWidth : 1,
	},
	content: {
		flex:5,
		borderColor: 'red',
		borderWidth: 1,
		marginTop : 10,
		borderWidth : 1,
		borderColor : 'rgb(205, 210, 215)',
	},
});

export default Detail