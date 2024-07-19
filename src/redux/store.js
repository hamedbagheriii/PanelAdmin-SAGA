import {configureStore} from "@reduxjs/toolkit";
import darkmodeReducer from './theme/darkModeSlice'
import postsReducer from './posts/postsSlice'
import commentsReducer from './comments/comments'
import createSagaMiddleware from "@redux-saga/core";
import galleryReducer from './gallery/gallerySlice'
import userReducer from "./users/usersReducer";
import { usersSaga } from "./users/usersSaga";


// ! با استفاده از ریداکس از زدن رکوست دوباره جلوگیری میکنیم
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        darkmode: darkmodeReducer ,
        users : userReducer,
        posts : postsReducer,
        comments : commentsReducer,
        gallery : galleryReducer,
    },
    middleware : ()=>[sagaMiddleware]
})

sagaMiddleware.run(usersSaga);

export default store