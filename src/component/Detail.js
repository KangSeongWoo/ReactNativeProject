import React,{useState} from 'react';
import { StyleSheet, View,Alert } from 'react-native';
import CustomButton from '../CustomComponent/CustomButton'
import CustomInput from '../CustomComponent/CustomInput'

const Detail = ({data}) => {
	const [state, setState] = useState({
        title: '',
        content : '',
    }) 
    
    const handleChangeInput = (key, value) => {
        setState({
            ...state,
            [key] : value
        })
    }

	return (
		<>
			<CustomInput
                name='title'
                placeholder='제목을 입력'
                type='singleline'
				value={data.title != '' ? data.title : undefined}
                onChange={handleChangeInput}
                size={1}
                maxlength={100}
            />
            <CustomInput
                name='content'
                placeholder='내용을 입력'
                type='multiline'
				value={data.content != '' ? data.content : undefined}
                onChange={handleChangeInput}
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
	
});

export default Detail