import axios from "axios"
import { call, put, takeEvery } from "redux-saga/effects"
import { SEND_REQUEST_DELETE_POSTS, SEND_REQUEST_POSTS } from "./postsType"
import { ErrorDeletePosts, GetDeletePosts, getRequestError, getRequestResponse } from "./postsAction"

const getPostsData = ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}

const deletePostsData = (action)=>{
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${action}`)
}


function* handleSetPosts (action){
    try {
        const res = yield call(getPostsData)
        console.log(res.data);
        yield put(getRequestResponse(res.data.slice(0,20)));
    } catch (error) {
        yield put(getRequestError(error.message));
    }
}

function* handleDeletePosts (action){
    try {
        const res = yield call(deletePostsData , action.payLoad)
        if (res.status == 200) {
            yield put(GetDeletePosts(action.payLoad));
        }
    } catch (error) {
        yield put(ErrorDeletePosts(error.message));
    }
}


export function* postsSaga(){
    yield takeEvery(SEND_REQUEST_POSTS , handleSetPosts)
    yield takeEvery(SEND_REQUEST_DELETE_POSTS , handleDeletePosts)
}