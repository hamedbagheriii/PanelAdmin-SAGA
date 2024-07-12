import {configureStore} from "@reduxjs/toolkit";
import darkmodeReducer from './theme/darkModeSlice'
import usersReducer from './users/usersSlice'
import postsReducer from './posts/postsSlice'
import commentsReducer from './comments/comments'
import galleryReducer from './gallery/gallerySlice'


// ! با استفاده از ریداکس از زدن رکوست دوباره جلوگیری میکنیم


const store = configureStore({
    reducer:{
        darkmode: darkmodeReducer ,
        users : usersReducer,
        posts : postsReducer,
        comments : commentsReducer,
        gallery : galleryReducer

    }
})

export default store