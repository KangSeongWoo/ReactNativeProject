import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import Write from './Write'
import Detail from './Detail'
import Item from './Item'
import { dataList } from '../tempData/data'

import Icon from 'react-native-vector-icons/Ionicons';

const List = () => {
	const [isVisibleWrite, setIsVisibleWrite] = useState(false)
	const [isVisibleDetail, setIsVisibleDetail] = useState(false)
	const [itemList, setItemList] = useState(dataList);
	
	const openPopup = () => {
		setIsVisible(!isVisible)
	}
	
	const renderItem = ({ item }) => (
		<Item title={item.title} content={item.content} date={item.date} setIsVisible={setIsVisibleDetail} />
	);
	
	return (
		<View style={styles.contentView}>
			<FlatList
				style={styles.flatlist}
				data={itemList}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
			<TouchableOpacity style={styles.button} onPress={openPopup}>
				<Icon name="ios-add-outline" size={30} color="white"/>
			</TouchableOpacity>
			<Write isVisible={isVisibleWrite} setIsVisible={setIsVisibleWrite} />
			<Detail isVisible={isVisibleDetail} setIsVisible={setIsVisibleDetail} />
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