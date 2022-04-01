import React from 'react';
import Layout from './src/Template/Layout';
import 'react-native-gesture-handler';
import {createStore} from 'redux';
import reducer from './src/store/reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );
};

export default App;
