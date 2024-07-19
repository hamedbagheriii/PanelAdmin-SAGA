import { DELETE_COMMENT_ERROR, DELETE_COMMENT_RESPONSE, GET_COMMENT_REQUEST_ERROR, GET_COMMENT_REQUEST_RESPONSE, GET_COMMENT_SEARCH_ERROR, GET_COMMENT_SEARCH_RESPONSE, SEND_REQUEST_COMMENT, SEND_REQUEST_DELETE_COMMENT } from "./commentType"


// get comment =>
export const sendRequestComment = ()=>{
    return ({
        type : SEND_REQUEST_COMMENT
    })
}

export const getRequestResponse = (data)=>{
    return ({
        type : GET_COMMENT_REQUEST_RESPONSE ,
        payLoad : data
    })
}

export const getRequestError = (error)=>{
    return ({
        type : GET_COMMENT_REQUEST_ERROR ,
        payLoad : error
    })
}

// search comment =>
export const getSearchResponse = (target)=>{
    return ({
        type : GET_COMMENT_SEARCH_RESPONSE,
        payLoad : target
    })
}

export const getSearchError = (error)=>{
    return ({
        type : GET_COMMENT_SEARCH_ERROR ,
        payLoad : error
    })
}

// delete comment =>
export const sendRequestDeleteComment = (id)=>{
    return ({
        type : SEND_REQUEST_DELETE_COMMENT,
        payLoad : id
    })
}

export const GetDeleteComment = (id)=>{
    return ({
        type : DELETE_COMMENT_RESPONSE,
        payLoad : id
    })
}

export const ErrorDeleteComment = (error)=>{
    return ({
        type : DELETE_COMMENT_ERROR,
        payLoad : error
    })
}