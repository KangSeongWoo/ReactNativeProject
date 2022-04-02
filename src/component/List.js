import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, FlatList, TouchableOpacity, Text } from 'react-native';
import Write from './Write'
import Detail from './Detail'
import CustomModal from '../CustomComponent/CustomModal'
import Item from './Item'
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';

const List = (props) => {
	const [isVisibleWrite, setIsVisibleWrite] = useState(false)
	const [isVisibleDetail, setIsVisibleDetail] = useState(false)
	const [data, setData] = useState({})
	
	const openPopup = () => {
		setIsVisibleWrite(!isVisibleWrite)
	}
	
	const renderItem = ({ item }) => (
		<Item data={item} setData={setData} setIsVisible={setIsVisibleDetail} />
	);
	
	return (
		<View style={styles.contentView}>
			
			{props.memoList.length === 0 && (
				<View style={{
					height : '100%',
					justifyContent: "center",
					alignItems: 'center',
				}}>
					<Text>리스트가 없습니다.</Text>
				</View>
			)}
			
			{props.memoList.length !== 0 && (
				<FlatList
					style={styles.flatlist}
					data={props.memoList}
					renderItem={renderItem}
					keyExtractor={item => item.id}
				/>
			)}
			
			<TouchableOpacity style={styles.button} onPress={openPopup}>
				<Icon name="ios-add-outline" size={30} color="white"/>
			</TouchableOpacity>
			<CustomModal type="type3">
				<Write isVisible={isVisibleWrite} setIsVisible={setIsVisibleWrite} />
			</CustomModal>
			<CustomModal type="type2">
				<Detail isVisible={isVisibleDetail} data={data} setIsVisible={setIsVisibleDetail} />
			</CustomModal>
		</View>
	)
}

const styles = StyleSheet.create({
	contentView: {
		paddingHorizontal: 33,
		flex : 10
	},
  flatlist: {
    width : Dimensions.get('screen').width * 0.90
	},
	button: {
		position: 'absolute',
		bottom: 25,
		right: 40,
		borderRadius : 100,
		backgroundColor : '#000000',
		justifyContent: "center",
		alignItems: 'center',
		borderWidth:1,
		borderColor : '#000000',
		width: 50,
		height : 50
	}
});

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

export default connect(mapReduxStateToReactProps, mapDispatchToProps)(List)