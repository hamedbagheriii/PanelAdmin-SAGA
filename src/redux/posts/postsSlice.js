import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    loading :false,
    isFetching : false,
    posts : [],
    postSearch : [],
    error : ''
}


export const getPosts = createAsyncThunk('Posts/getPosts' , async ()=>{
   const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
   return (await res.data.slice(0,20));
})


const postsSlice = createSlice({
    name : 'posts',
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(getPosts.pending , (state , action)=>{
            if(state.posts.length > 0){
                state.isFetching = true;
            }
            else{
                state.isFetching = true;
                state.loading = true;
            }
        })

        builder.addCase(getPosts.fulfilled , (state , action)=>{
            state.posts = action.payload;
            state.postSearch = action.payload;
            state.isFetching = false;
            state.loading = false;
        })

        builder.addCase(getPosts.rejected , (state , action)=>{
            state.posts = [];
            state.error = action.error.message;
            state.isFetching = false;
            state.loading = false;
        })
    },
    reducers : {
        setPostSearch : (state , action)=>{
            state.posts = state.postSearch.filter((t)=>t.title.toLowerCase().includes(action.payload))
        }
    }
})

export default postsSlice.reducer;
export const {setPostSearch} = postsSlice.actions;