import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigator from './Navigator'

enableScreens();

const Layout = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Navigator/>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default Layout