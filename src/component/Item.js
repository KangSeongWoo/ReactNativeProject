import React, { useState } from 'react';
import { SafeAreaView, Text,StyleSheet, View, FlatList,Dimensions,Button  } from 'react-native';

const Item = ({title,content,date,containerWidth }) => {
	return (
    <View style={styles.item}>
      <View style={styles.title}>
        <Text>{title}</Text>
        <Text>{date}</Text>
      </View>
      <Text numberOfLines={4} style={styles.content}>{content}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
  item: {
    height : 150,
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth : 1,
    borderColor : 'rgb(205, 210, 215)'
  },
  title: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(205, 210, 215)',
    paddingBottom: 8,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  content: {
    paddingTop: 8
  }
});

export default Item
