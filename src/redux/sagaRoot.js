import { all } from "redux-saga/effects";
import { postsSaga } from "./posts/postsSaga";
import { usersSaga } from "./users/usersSaga";
import { gallerySaga } from "./gallery/gallerySaga";
import { CommentSaga } from "./comments/commentSaga";

export default function* rootSaga() {
    yield all([
        postsSaga(),
        usersSaga(),
        gallerySaga(),
        CommentSaga()
    ])
  }