import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, Dimensions, Button } from 'react-native';
import Header from './Header'
import Contents from './Contents'
import Footer from './Footer'

const Layout = () => {
	const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundColor: 'white',
	});
	
	return (
		<SafeAreaView style={[styles.outer, backgroundStyle]}>
			<Header />
			<Contents />
			{/* <Footer/> */}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
});

export default Layout