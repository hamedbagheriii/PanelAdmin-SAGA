import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects"
import { ErrorDeleteComment, GetDeleteComment, getRequestError, getRequestResponse } from "./commentAction";
import { SEND_REQUEST_COMMENT, SEND_REQUEST_DELETE_COMMENT } from "./commentType";


const getCommentData = ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/comments')
}

const deleteCommentData = (action)=>{
    return axios.delete(`https://jsonplaceholder.typicode.com/comments/${action}`)
}


function* handleSetComment (action){
    try {
        const res = yield call(getCommentData)
        yield put(getRequestResponse(res.data.slice(0,20)));
    } catch (error) {
        yield put(getRequestError(error.message));
    }
}

function* handleDeleteComment (action){
    try {
        const res = yield call(deleteCommentData , action.payLoad)
        if (res.status == 200) {
            yield put(GetDeleteComment(action.payLoad));
        }
    } catch (error) {
        yield put(ErrorDeleteComment(error.message));
    }
}


export function* CommentSaga(){
    yield takeEvery(SEND_REQUEST_COMMENT , handleSetComment)
    yield takeEvery(SEND_REQUEST_DELETE_COMMENT , handleDeleteComment)
}