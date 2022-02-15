import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, Dimensions, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import {createStackNavigator} from '@react-navigation/stack';

import List1 from '../component/List1.js';
import List2 from '../component/List2.js';
import List3 from '../component/List3.js';
import List4 from '../component/List4.js';

const Stack = createStackNavigator();

const Navigator = () => {
	return (
			<Stack.Navigator initialRouteName='List1'>
				<Stack.Screen name='List1' component={List1} />
				<Stack.Screen name='List2' component={List2} />
				<Stack.Screen name='List3' component={List3} />
				<Stack.Screen name='List4' component={List4}/>
			</Stack.Navigator> 
	)
}

export default Navigator; 