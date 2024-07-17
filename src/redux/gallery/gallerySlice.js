import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading : false ,
    isFetching : false ,
    gallery : [],
    gallerySearch : [],
    error : ''
}


export const getGallery = createAsyncThunk('Gallery/getGallery' , async ()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
    return (await res.data.splice(0,20));
})


const gallerySlice = createSlice({
    name : 'gallerySlice',
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(getGallery.pending , (state , action)=>{
            if(state.gallery.length > 0){
                state.isFetching = true;
            }
            else{
                state.isFetching = true;
                state.loading = true;
            }
        });

        builder.addCase(getGallery.fulfilled , (state , action)=>{
            state.gallery = action.payload;
            state.gallerySearch = action.payload;
            state.isFetching = false;
            state.loading = false;
        })
        
        builder.addCase(getGallery.rejected , (state , action)=>{
            state.gallery = [];
            state.error = action.error.message;
            state.isFetching = false;
            state.loading = false;
        })
    },
    reducers : {
        setGallerySearch : (state , action)=>{
            state.gallery = state.gallerySearch.filter((t)=>t.title.toLowerCase().includes(action.payload))
        }
    }
})

export default gallerySlice.reducer;
export const {setGallerySearch} = gallerySlice.actions;