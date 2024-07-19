import { DELETE_USERS_ERROR, DELETE_USERS_RESPONSE, GET_REQUEST_ERROR, GET_REQUEST_RESPONSE, GET_SEARCH_ERROR, GET_SEARCH_RESPONSE, SEND_REQUEST_DELETE_USERS, SEND_REQUEST_USERS } from "./usersType"

// get users =>
export const sendRequestUsers = ()=>{
    return ({
        type : SEND_REQUEST_USERS
    })
}

export const getRequestResponse = (data)=>{
    return ({
        type : GET_REQUEST_RESPONSE ,
        payLoad : data
    })
}

export const getRequestError = (error)=>{
    return ({
        type : GET_REQUEST_ERROR ,
        payLoad : error
    })
}

// search users =>
export const getSearchResponse = (userID)=>{
    return ({
        type : GET_SEARCH_RESPONSE ,
        payLoad : userID
    })
}

export const getSearchError = (error)=>{
    return ({
        type : GET_SEARCH_ERROR ,
        payLoad : error
    })
}

// delete users =>
export const sendRequestDeleteUsers = (id)=>{
    return ({
        type : SEND_REQUEST_DELETE_USERS,
        payLoad : id
    })
}

export const GetDeleteUsers = (id)=>{
    return ({
        type : DELETE_USERS_RESPONSE ,
        payLoad : id
    })
}

export const ErrorDeleteUsers = (error)=>{
    return ({
        type : DELETE_USERS_ERROR ,
        payLoad : error
    })
}