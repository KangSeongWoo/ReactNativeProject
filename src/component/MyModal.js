import React, { useState } from 'react';
import { Modal,Animated,Text,View,StyleSheet,Button,TouchableWithoutFeedback} from 'react-native';

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
				<Animated.View style={{...styles.bottomSheetContainer}}>
					<Text>This is BottomSheet</Text>   
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
    bottomSheetContainer: {
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
})

export default MyModal