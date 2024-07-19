import { all } from "redux-saga/effects";
import { postsSaga } from "./posts/postsSaga";
import { usersSaga } from "./users/usersSaga";

export default function* rootSaga() {
    yield all([
        postsSaga(),
        usersSaga(),
    ])
  }