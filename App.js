import React from 'react';
import Layout from './src/Template/Layout';
import { connect } from 'react-redux'
import 'react-native-gesture-handler';
import * as actions from './src/store/actionCreators'
import {createStore} from 'redux';
import reducers from './src/store/reducers';
import {Provider} from 'react-redux';

const store = createStore(reducers);

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
