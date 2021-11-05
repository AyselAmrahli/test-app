import { call, put, takeEvery, all } from 'redux-saga/effects'
import COMMENTS from '../actions'
import { fetchComments, postComment } from '../api';

function* getComments() {
    try {
        const comments = yield call(fetchComments);
        yield put({type: COMMENTS.FETCH_SUCCESS, payload:comments})
    } catch (error) {
        yield put({type: COMMENTS.FETCH_FAILURE, error})
    }
}


function* addComment(action) {
    try {
        const comments = yield call(postComment, action.body);
        yield put({type: COMMENTS.POST_SUCCESS, payload:comments})
    } catch (error) {
        yield put({type: COMMENTS.POST_FAILURE, error})
    }
}

function* rootSaga() {
    yield all([
        takeEvery(COMMENTS.FETCH, getComments),
        takeEvery(COMMENTS.POST, addComment)
    ])
}

export default rootSaga;