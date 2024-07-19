import { DELETE_COMMENT_ERROR, DELETE_COMMENT_RESPONSE, GET_COMMENT_REQUEST_ERROR, GET_COMMENT_REQUEST_RESPONSE, GET_COMMENT_SEARCH_ERROR, GET_COMMENT_SEARCH_RESPONSE, SEND_REQUEST_COMMENT } from "./commentType";


const initialState = {
    loading : false ,
    isFetching : false ,
    comments : [],
    commentsSearch : [],
    error : ''
}




const commentReducer = (state = initialState , action)=>{
    switch (action.type) {
        // get comments =>
        case SEND_REQUEST_COMMENT:
            if(state.comments.length > 0){
                return {...state , isFetching : true , loading : false};
            }
            else{
                return {...state , isFetching : true , loading : true}
            }
            
        case GET_COMMENT_REQUEST_RESPONSE:
            return {...state , loading : false , isFetching : false , comments : action.payLoad , commentsSearch : action.payLoad}

            
        case GET_COMMENT_REQUEST_ERROR:
            return {...state , loading : false , isFetching : false , error : action.payLoad , comments : [] }   
                

        // search comments =>
        case GET_COMMENT_SEARCH_RESPONSE :
            return {...state , comments : state.commentsSearch.filter((t)=>t.name.toLowerCase().includes(action.payLoad)) }
                    
        case GET_COMMENT_SEARCH_ERROR :
            return {...state , comments : state.comments , error : action.payLoad}


        // delete comments =>
        case DELETE_COMMENT_RESPONSE:
            return {...state , comments : state.comments.filter((t)=> t.id != action.payLoad)}
        
        case DELETE_COMMENT_ERROR:
            return {...state , comments : state.comments , error : action.payLoad}


        default:
            return state;
    }
}


export default commentReducer;