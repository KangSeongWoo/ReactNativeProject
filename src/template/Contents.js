import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import MyModal from '../component/MyModal'
import Item from '../component/Item'
import { dataList } from '../tempData/data'

import Icon from 'react-native-vector-icons/Ionicons';

const Contents = () => {
	const [containerWidth, setContainerWidth] = useState(0);
	const [isVisible, setIsVisible] = useState(false)
	const [itemList, setItemList] = useState(dataList);
	
	const openPopup = () => {
		setIsVisible(!isVisible)
	}
	
	const renderItem = ({ item }) => (
		<Item title={item.title} content={item.content} date={item.date} />
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
				<Icon name="ios-add-outline" size={40} color="black"/>
			</TouchableOpacity>
			<MyModal isVisible={isVisible} setIsVisible={setIsVisible} />
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
		top: 600,
		left: 335,
		borderRadius : 100,
		backgroundColor : 'white',
		justifyContent: "center",
		alignItems: 'center',
		borderWidth:1,
		borderColor : 'rgb(205, 210, 215)',
		width: 50,
		height : 50
	}
});

export default Contents