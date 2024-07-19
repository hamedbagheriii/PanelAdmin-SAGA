import axios from "axios"
import { call, put, takeEvery } from "redux-saga/effects"
import { SEND_REQUEST_DELETE_USERS, SEND_REQUEST_USERS } from "./usersType"
import { ErrorDeleteUsers, GetDeleteUsers, getRequestError, getRequestResponse } from "./usersAction"

const getData = ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

const deleteData = (action)=>{
    return axios.delete(`https://jsonplaceholder.typicode.com/users/${action}`)
}


function* handleSetUsers (action){
    try {
        const res = yield call(getData)
        yield put(getRequestResponse(res.data));
    } catch (error) {
        yield put(getRequestError(error.message));
    }
}

function* handleDeleteUsers (action){
    try {
        const res = yield call(deleteData , action.payLoad)
        if (res.status == 200) {
            yield put(GetDeleteUsers(action.payLoad));
        }
    } catch (error) {
        yield put(ErrorDeleteUsers(error.message));
    }
}


export function* usersSaga(){
    yield takeEvery(SEND_REQUEST_USERS , handleSetUsers)
    yield takeEvery(SEND_REQUEST_DELETE_USERS , handleDeleteUsers)
}