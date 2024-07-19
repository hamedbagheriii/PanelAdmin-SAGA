import {configureStore} from "@reduxjs/toolkit";
import darkmodeReducer from './theme/darkModeSlice'
import createSagaMiddleware from "@redux-saga/core";
import usersReducer from "./users/usersReducer";
import postsReducer from "./posts/postsReducer";
import rootSaga from "./sagaRoot";
import galleryReducer from "./gallery/galleryReducer";
import commentReducer from "./comments/commentReducer";


// ! با استفاده از ریداکس از زدن رکوست دوباره جلوگیری میکنیم
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        darkmode: darkmodeReducer ,
        users : usersReducer,
        posts : postsReducer,
        comments : commentReducer,
        gallery : galleryReducer,
    },
    middleware : ()=>[sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

export default store