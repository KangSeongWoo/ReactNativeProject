import React from 'react';
import { Modal, Animated, Pressable, Button, Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback, TextInput, Alert, TouchableOpacity } from 'react-native';
import CustomButton from '../CustomComponent/CustomButton'

const Write = ({ isVisible, setIsVisible }) => {
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
            <Pressable onPress={closePopup} style={{
                flex:1,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                justifyContent: 'flex-end',
            
            }}>
                <View style={{
                    backgroundColor: '#FFFFFF',
                }}>
                    <TextInput
                        placeholder='제목을 입력'
                        style={styles.title}
                        editable
                        maxLength={20}
                    />
                    <TextInput
                        placeholder='내용을 입력'
                        style={styles.content}
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
                </View>
            </Pressable>
		</Modal>
  )
} 

const styles = StyleSheet.create({
    
})

export default Write