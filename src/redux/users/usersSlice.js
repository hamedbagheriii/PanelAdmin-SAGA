import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    loading : false ,
    isFetching : false,
    users : [],
    userSearch : [],
    error : ''
}

export const getUsers = createAsyncThunk('Users/getUsers' , async ()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return await res.data;
})



const userSlice = createSlice({
    name : 'users',
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(getUsers.pending , (state , action)=>{
            if(state.users.length > 0){
                state.isFetching = true;
            }
            else{
                state.loading = true
                state.isFetching = true
            }
        });
        builder.addCase(getUsers.fulfilled , (state , action)=>{
            state.loading = false;
            state.isFetching = false;
            state.users = action.payload;
            state.userSearch = action.payload;
        });
        builder.addCase(getUsers.rejected , (state , action)=>{
            state.loading = false;
            state.isFetching = false;
            state.users = [];
            state.error = action.error.message;
        });
    },
    reducers : {
        setSearch : (state , action)=>{
            state.users = state.userSearch.filter((t)=>t.name.toLowerCase().includes(action.payload))
        }
    }
})


export default userSlice.reducer;
export const {setSearch} = userSlice.actions;