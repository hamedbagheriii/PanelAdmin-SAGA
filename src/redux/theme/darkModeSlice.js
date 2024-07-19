import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme : 'light'
}

const darkmodeSlice = createSlice({
    name : 'theme' ,
    initialState,
    reducers : {
        setDarkMode : (state)=>{
            state.theme = 'darkMode'
        },
        setLightMode : (state)=>{
            state.theme = 'light'
        }
    }
})




export default darkmodeSlice.reducer
export const {setDarkMode, setLightMode, setTheme} = darkmodeSlice.actions