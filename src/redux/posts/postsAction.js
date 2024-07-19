import { DELETE_POSTS_ERROR, DELETE_POSTS_RESPONSE, GET_POST_REQUEST_ERROR, GET_POST_REQUEST_RESPONSE, GET_POST_SEARCH_ERROR, GET_PSOT_SEARCH_RESPONSE, SEND_REQUEST_DELETE_POSTS, SEND_REQUEST_POSTS } from "./postsType"


// get Posts =>
export const sendRequestPosts = ()=>{
    return ({
        type : SEND_REQUEST_POSTS
    })
}

export const getRequestResponse = (data)=>{
    return ({
        type : GET_POST_REQUEST_RESPONSE ,
        payLoad : data
    })
}

export const getRequestError = (error)=>{
    return ({
        type : GET_POST_REQUEST_ERROR ,
        payLoad : error
    })
}

// search Posts =>
export const getSearchResponse = (target)=>{
    return ({
        type : GET_PSOT_SEARCH_RESPONSE,
        payLoad : target
    })
}

export const getSearchError = (error)=>{
    return ({
        type : GET_POST_SEARCH_ERROR ,
        payLoad : error
    })
}

// delete Posts =>
export const sendRequestDeletePosts = (id)=>{
    return ({
        type : SEND_REQUEST_DELETE_POSTS,
        payLoad : id
    })
}

export const GetDeletePosts = (id)=>{
    return ({
        type : DELETE_POSTS_RESPONSE ,
        payLoad : id
    })
}

export const ErrorDeletePosts = (error)=>{
    return ({
        type : DELETE_POSTS_ERROR ,
        payLoad : error
    })
}