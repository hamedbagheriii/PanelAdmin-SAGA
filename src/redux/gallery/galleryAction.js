import { DELETE_GALLERY_ERROR, DELETE_GALLERY_RESPONSE, GET_GALLERY_REQUEST_ERROR, GET_GALLERY_REQUEST_RESPONSE, GET_GALLERY_SEARCH_ERROR, GET_GALLERY_SEARCH_RESPONSE, SEND_REQUEST_DELETE_GALLERY, SEND_REQUEST_GALLERY } from "./galleryType"


// get gallery =>
export const sendRequestgallery = ()=>{
    return ({
        type : SEND_REQUEST_GALLERY
    })
}

export const getRequestResponse = (data)=>{
    return ({
        type : GET_GALLERY_REQUEST_RESPONSE ,
        payLoad : data
    })
}

export const getRequestError = (error)=>{
    return ({
        type : GET_GALLERY_REQUEST_ERROR ,
        payLoad : error
    })
}

// search gallery =>
export const getSearchResponse = (target)=>{
    return ({
        type : GET_GALLERY_SEARCH_RESPONSE,
        payLoad : target
    })
}

export const getSearchError = (error)=>{
    return ({
        type : GET_GALLERY_SEARCH_ERROR ,
        payLoad : error
    })
}

// delete gallery =>
export const sendRequestDeletegallery = (id)=>{
    return ({
        type : SEND_REQUEST_DELETE_GALLERY,
        payLoad : id
    })
}

export const GetDeletegallery = (id)=>{
    return ({
        type : DELETE_GALLERY_RESPONSE,
        payLoad : id
    })
}

export const ErrorDeletegallery = (error)=>{
    return ({
        type : DELETE_GALLERY_ERROR ,
        payLoad : error
    })
}