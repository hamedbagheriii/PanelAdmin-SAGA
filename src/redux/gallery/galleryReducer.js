import { DELETE_GALLERY_ERROR, DELETE_GALLERY_RESPONSE, GET_GALLERY_REQUEST_ERROR, GET_GALLERY_REQUEST_RESPONSE, GET_GALLERY_SEARCH_ERROR, GET_GALLERY_SEARCH_RESPONSE, SEND_REQUEST_DELETE_GALLERY, SEND_REQUEST_GALLERY } from "./galleryType"


const initialState = {
    loading : false ,
    isFetching : false ,
    gallery : [],
    gallerySearch : [],
    error : ''
}




const galleryReducer = (state = initialState , action)=>{
    switch (action.type) {
        // get Posts =>
        case SEND_REQUEST_GALLERY:
            if(state.gallery.length > 0){
                return {...state , isFetching : true , loading : false};
            }
            else{
                return {...state , isFetching : true , loading : true}
            }
            
        case GET_GALLERY_REQUEST_RESPONSE:
            return {...state , loading : false , isFetching : false , gallery : action.payLoad , gallerySearch : action.payLoad}

            
        case GET_GALLERY_REQUEST_ERROR:
            return {...state , loading : false , isFetching : false , error : action.payLoad , gallery : [] }   
                

        // search gallery =>
        case GET_GALLERY_SEARCH_RESPONSE :
            return {...state , gallery : state.gallerySearch.filter((t)=>t.title.toLowerCase().includes(action.payLoad)) }
                    
        case GET_GALLERY_SEARCH_ERROR :
            return {...state , gallery : state.gallery , error : action.payLoad}


        // delete gallery =>
        case DELETE_GALLERY_RESPONSE:
            return {...state , gallery : state.gallery.filter((t)=> t.id != action.payLoad)}
        
        case DELETE_GALLERY_ERROR:
            return {...state , gallery : state.gallery , error : action.payLoad}


        default:
            return state;
    }
}


export default galleryReducer;