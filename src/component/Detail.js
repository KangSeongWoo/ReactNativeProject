import React from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import CustomButton from '../CustomComponent/CustomButton'

const Detail = () => {
	return (
		<>
			<TextInput
					placeholder='제목을 입력'
					editable
					maxLength={20}
			/>
			<TextInput
					placeholder='내용을 입력'
					multiline
					numberOfLines={4}
					editable
					maxLength={100}
			/>
			<View style={{ justifyContent: 'space-between', flexDirection: 'row', height: 50 }}>
					<CustomButton
							buttonBackgroudColor = '#FFFFFF'
							buttonBorderColor = '#2CDFB1'
							buttonBorderWidth={1}
							textColor='#2CDFB1'
							title='Cancle'
							onPress={() => Alert.alert("취소 버튼이 눌렸습니다.")}
					/>
					<CustomButton
							buttonBackgroudColor = '#2CDFB1'
							buttonBorderColor = '#FFFFFF'
							buttonBorderWidth = {0}
							textColor='#FFFFFF'
							title='Save'
							onPress={() => Alert.alert("저장 버튼이 눌렸습니다.")}
					/>
			</View>
		</>					
	)
}

const styles = StyleSheet.create({
	
});

export default Detail