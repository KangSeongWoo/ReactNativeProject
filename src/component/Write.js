import React,{useState} from 'react';
import { View, StyleSheet, TextInput, Alert,Text } from 'react-native';
import CustomButton from '../CustomComponent/CustomButton'
import CustomInput from '../CustomComponent/CustomInput'
import * as actions from '../store/actionCreators'
import { connect } from 'react-redux';
const Write = (props) => {
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
    
    const saveTheContents = () => {
        props.setMemoList([...props.memoList, {'title' : state.title, 'content' : state.content , 'date' : new Date().toDateString(),}])
    }
    
    return (
        <>
            <CustomInput
                name='title'
                placeholder='제목을 입력'
                type='singleline'
                onChange={handleChangeInput}
                size={1}
                maxlength={100}
            />
            <CustomInput
                name='content'
                placeholder='내용을 입력'
                type='multiline'
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
                    onPress={saveTheContents}
                />
            </View>
        </>                
    )
} 

const mapDispatchToProps = dispatch => ({
    setMemoList: memoList => {
        dispatch(actions.setMemoList(memoList))
    }
})

const mapReduxStateToReactProps = (state) => {
    return {
        memoList: state.memoList
    }
}

export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Write)