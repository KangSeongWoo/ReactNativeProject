import React from 'react';
import { View, StyleSheet, TextInput, Alert,Text } from 'react-native';
import CustomButton from '../CustomComponent/CustomButton'
import CustomInput from '../CustomComponent/CustomInput'

const Write = () => {
    return (
        <>
            <CustomInput
                placeholder='제목을 입력'
                type='singleline'
            />
            <CustomInput
                placeholder='내용을 입력'
                type='multiline'
                size={15}
                maxlength={100}
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
    
})

export default Write