import React from 'react';
import { Text,StyleSheet, View, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native'
const Item = ({ title, content, date, clickPage }) => {
  const navigation = useNavigation();
  const movePage = (clickPage) => {
    navigation.navigate(clickPage)
  }
  return (
    <TouchableOpacity onPress={() => movePage(clickPage)}>
      <View style={styles.item}>
        <View style={styles.title}>
          <Text>{title}</Text>
          <Text>{date}</Text>
        </View>
        <Text numberOfLines={4} style={styles.content}>{content}</Text>
      </View>
    </TouchableOpacity>
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
