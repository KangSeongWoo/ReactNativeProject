import React from 'react';
import { Modal,Animated,Text,View,StyleSheet,Dimensions,TouchableWithoutFeedback,TextInput,Alert,TouchableOpacity} from 'react-native';

const MyModal = ({ isVisible, setIsVisible }) => {
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
            <View style={styles.overlay}>
                <TouchableWithoutFeedback onPress={closePopup}>
                    <View style={styles.background}/>
                </TouchableWithoutFeedback>
                <Animated.View style={{ ...styles.bottomSheetContainer }}>
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
                    <View style={styles.buttonArea}>
                        <TouchableOpacity style={{...styles.button, marginRight : 10 }} onPress={() => Alert.alert("취소 버튼이 눌렸습니다.")}>
                            <Text style={styles.textComponent}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.button, marginLeft : 10 }}onPress={() => Alert.alert("저장 버튼이 눌렸습니다.")}>
                            <Text style={styles.textComponent}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
			</View>
		</Modal>
  )
} 

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    background: {
        flex: 1,
    },
    title: {
        marginTop : 20,
        borderBottomWidth : 1,
        borderBottomColor : 'rgb(205, 210, 215)',
        width : Dimensions.get('screen').width * 0.9
    },
    content: {
        marginTop : 20,
        borderWidth : 1,
        borderColor : 'rgb(205, 210, 215)',
        width : Dimensions.get('screen').width * 0.9
    },
    bottomSheetContainer: {
        height: 300,
        alignItems: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    buttonArea: {
        marginTop : 30,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    button: {
        width: Dimensions.get('screen').width * 0.45,
        justifyContent: "center",
        alignItems: 'center',
        height : 40
    },
    textComponent: {
        fontWeight: 'bold',
        color: 'black'
    }
})

export default MyModal