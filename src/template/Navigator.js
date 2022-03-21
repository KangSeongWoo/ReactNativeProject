import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import List from '../Component/List.js';

const Stack = createStackNavigator();

const Navigator = () => {
	return (
		<Stack.Navigator initialRouteName='List'>
			<Stack.Screen name='List' component={List} />
		</Stack.Navigator> 
	)
}

export default Navigator; 