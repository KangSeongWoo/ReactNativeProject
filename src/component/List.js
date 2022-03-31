import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, FlatList, TouchableOpacity, Text } from 'react-native';
import Write from './Write'
import Detail from './Detail'
import CustomModal from '../CustomComponent/CustomModal'
import Item from './Item'

import Icon from 'react-native-vector-icons/Ionicons';

const List = (props) => {
	const [isVisibleWrite, setIsVisibleWrite] = useState(false)
	const [isVisibleDetail, setIsVisibleDetail] = useState(false)
	const [itemList, setItemList] = useState(dataList);
	
	const openPopup = () => {
		setIsVisibleWrite(!isVisibleWrite)
	}
	
	const renderItem = ({ item }) => (
		<Item title={item.title} content={item.content} date={item.date} setIsVisible={setIsVisibleDetail} />
	);
	
	return (
		<View style={styles.contentView}>
			
			{/* {itemList.length === 0 && (
				<View style={{
					height : '100%',
					justifyContent: "center",
					alignItems: 'center',
				}}>
					<Text>리스트가 없습니다.</Text>
				</View>
			)}
			
			{itemList.length !== 0 && (
				<FlatList
					style={styles.flatlist}
					data={itemList}
					renderItem={renderItem}
					keyExtractor={item => item.id}
				/>
			)} */}
			
			<TouchableOpacity style={styles.button} onPress={openPopup}>
				<Icon name="ios-add-outline" size={30} color="white"/>
			</TouchableOpacity>
			<CustomModal type="type3">
				<Write isVisible={isVisibleWrite} setIsVisible={setIsVisibleWrite} />
			</CustomModal>
			<CustomModal type="type2">
				<Detail isVisible={isVisibleDetail} setIsVisible={setIsVisibleDetail} />
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

export default List