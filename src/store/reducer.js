import * as types from './actionType';

// 초기 상태를 정의합니다.
const initialState = {
    memoList: []
}

const modifyState = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_MEMOLIST:
            return {
                ...state,
                memoList : action.memoList
            }
        default:
            return state
    }
}

export default modifyState