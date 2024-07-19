import {configureStore} from "@reduxjs/toolkit";
import darkmodeReducer from './theme/darkModeSlice'
import commentsReducer from './comments/comments'
import createSagaMiddleware from "@redux-saga/core";
import galleryReducer from './gallery/gallerySlice'
import usersReducer from "./users/usersReducer";
import { usersSaga } from "./users/usersSaga";
import { postsSaga } from "./posts/postsSaga";
import postsReducer from "./posts/postsReducer";
import rootSaga from "./sagaRoot";


// ! با استفاده از ریداکس از زدن رکوست دوباره جلوگیری میکنیم
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        darkmode: darkmodeReducer ,
        users : usersReducer,
        posts : postsReducer,
        comments : commentsReducer,
        gallery : galleryReducer,
    },
    middleware : ()=>[sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

export default store