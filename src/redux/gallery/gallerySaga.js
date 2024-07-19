import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects"
import { ErrorDeletegallery, GetDeletegallery, getRequestError, getRequestResponse } from "./galleryAction";
import { SEND_REQUEST_DELETE_GALLERY, SEND_REQUEST_GALLERY } from "./galleryType";


const getGalleryData = ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/photos')
}

const deleteGalleryData = (action)=>{
    return axios.delete(`https://jsonplaceholder.typicode.com/photos/${action}`)
}


function* handleSetGallery (action){
    try {
        const res = yield call(getGalleryData)
        yield put(getRequestResponse(res.data.slice(0,20)));
    } catch (error) {
        yield put(getRequestError(error.message));
    }
}

function* handleDeleteGallery (action){
    try {
        const res = yield call(deleteGalleryData , action.payLoad)
        if (res.status == 200) {
            yield put(GetDeletegallery(action.payLoad));
        }
    } catch (error) {
        yield put(ErrorDeletegallery(error.message));
    }
}


export function* gallerySaga(){
    yield takeEvery(SEND_REQUEST_GALLERY , handleSetGallery)
    yield takeEvery(SEND_REQUEST_DELETE_GALLERY , handleDeleteGallery)
}