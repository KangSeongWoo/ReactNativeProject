import React from 'react';
import Layout from './src/Template/Layout';
import 'react-native-gesture-handler';
import * as actions from './src/store/actionCreators'
import {store} from './src/store/index'
import {Provider, connect} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );
};

const mapDispatchToProps = dispatch => ({
    setMemoList: memoList => {
        dispatch(actions.setMemoList(memoList))
    }
})

const mapReduxStateToReactProps = (state) => {
    return {
        memoList: state.memoList
    }
}

export default connect(mapReduxStateToReactProps, mapDispatchToProps)(App);
