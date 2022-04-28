import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data); // fork 비동기 함수 호출 call 동기 함수 호출 첫번째 자리는 함수 나머지는 매개변수 call의 특성
    yield put({ type: "LOG_IN_SUCCESS", data: result.data });
  } catch (err) {
    yield put({ type: "LOG_IN_FAILURE", data: err.response.data });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logout() {
  try {
    const result = yield call(logOutAPI);
    yield put({ type: "LOG_OUT_SUCCESS", data: result.data });
  } catch (err) {
    yield put({ type: "LOG_OUT_FAILURE", data: err.response.data });
  }
}

function addPostAPI() {
  return axios.post("/api/post");
}

function* addPost() {
  try {
    const result = yield call(addPostAPI);
    yield put({ type: "ADD_POST_SUCCESS", data: result.data });
  } catch (err) {
    yield put({ type: "ADD_POST_FAILURE", data: err.response.data });
  }
}

function* watchLogIn() {
  yield takeEvery("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield takeEvery("LOG_OUT_REQUEST", logout);
}

function* watchAddPost() {
  yield takeEvery("ADD_POST_REQUEST", addPost);
}

export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]);
}
