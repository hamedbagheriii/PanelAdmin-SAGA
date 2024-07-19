import { DELETE_USERS_ERROR, DELETE_USERS_RESPONSE, GET_REQUEST_ERROR, GET_REQUEST_RESPONSE, GET_SEARCH_ERROR, GET_SEARCH_RESPONSE, SEND_REQUEST_USERS } from "./usersType";

const initialState ={
    loading : false ,
    isFetching : false,
    users : [],
    userSearch : [],
    error : ''
}



const usersReducer = (state = initialState , action)=>{
    switch (action.type) {
        // get users =>
        case SEND_REQUEST_USERS:
            if(state.users.length > 0){
                return {...state , isFetching : true , loading : false};
            }
            else{
                return {...state , isFetching : true , loading : true}
            }
            
        case GET_REQUEST_RESPONSE:
            return {...state , loading : false , isFetching : false , users : action.payLoad , userSearch : action.payLoad}

            
        case GET_REQUEST_ERROR:
            return {...state , loading : false , isFetching : false , error : action.payLoad , users : [] }   
                

        // search users =>
        case GET_SEARCH_RESPONSE :
            return {...state , users : state.userSearch.filter((t)=>t.name.toLowerCase().includes(action.payLoad)) }
                    
        case GET_SEARCH_ERROR :
            return {...state , users : state.users , error : action.payLoad}


        // delete users =>
        case DELETE_USERS_RESPONSE:
            return {...state , users : state.users.filter((t)=> t.id != action.payLoad)}
        
        case DELETE_USERS_ERROR:
            return {...state , users : state.users , error : action.payLoad}


        default:
            return state;
    }
}


export default usersReducer;