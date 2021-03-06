import { all, fork, takeLatest, delay, put } from "redux-saga/effects";
import axios from "axios";
import {
  LOG_IN_SUCCESS,
  LOG_OUT_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_FAILURE,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_REQUEST,
} from "../reducers/user";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data); // fork 비동기 함수 호출 call 동기 함수 호출 첫번째 자리는 함수 나머지는 매개변수 call의 특성
    yield delay(1000);
    yield put({ type: LOG_IN_SUCCESS, data: action.data });
  } catch (err) {
    yield put({ type: LOG_IN_FAILURE, error: err.response.data });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logout() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({ type: LOG_OUT_SUCCESS });
  } catch (err) {
    yield put({ type: LOG_OUT_FAILURE, error: err.response.data });
  }
}

function signUpAPI(data) {
  return axios.post("/api/signUp");
}

function* signUp(action) {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({ type: SIGN_UP_SUCCESS });
  } catch (err) {
    yield put({ type: SIGN_UP_FAILURE, error: err.response.data });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
