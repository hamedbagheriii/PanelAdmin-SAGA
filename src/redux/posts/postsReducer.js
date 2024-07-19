import { DELETE_POSTS_ERROR, DELETE_POSTS_RESPONSE, GET_POST_REQUEST_ERROR, GET_POST_REQUEST_RESPONSE, GET_POST_SEARCH_ERROR, GET_PSOT_SEARCH_RESPONSE, SEND_REQUEST_POSTS } from "./postsType";

const initialState = {
    loading :false,
    isFetching : false,
    posts : [],
    postsSearch : [],
    error : ''
}




const postsReducer = (state = initialState , action)=>{
    switch (action.type) {
        // get Posts =>
        case SEND_REQUEST_POSTS:
            if(state.posts.length > 0){
                return {...state , isFetching : true , loading : false};
            }
            else{
                return {...state , isFetching : true , loading : true}
            }
            
        case GET_POST_REQUEST_RESPONSE:
            return {...state , loading : false , isFetching : false , posts : action.payLoad , postsSearch : action.payLoad}

            
        case GET_POST_REQUEST_ERROR:
            return {...state , loading : false , isFetching : false , error : action.payLoad , posts : [] }   
                

        // search Posts =>
        case GET_PSOT_SEARCH_RESPONSE :
            return {...state , posts : state.postsSearch.filter((t)=>t.title.toLowerCase().includes(action.payLoad))}
                    
        case GET_POST_SEARCH_ERROR :
            return {...state , posts : state.posts , error : action.payLoad}


        // delete Posts =>
        case DELETE_POSTS_RESPONSE:
            return {...state , posts : state.posts.filter((t)=> t.id != action.payLoad)}
        
        case DELETE_POSTS_ERROR:
            return {...state , posts : state.posts , error : action.payLoad}


        default:
            return state;
    }
}


export default postsReducer;