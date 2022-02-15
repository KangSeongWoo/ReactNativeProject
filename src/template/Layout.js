import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigator from './Navigator'

enableScreens();

const Layout = () => {
	const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundColor: 'white',
	});
	
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Navigator/>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default Layout