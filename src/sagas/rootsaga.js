import newSaga from "./saga";
import {all,fork} from "redux-saga/effects"
export default function* rootsaga(){
    yield all([fork(newSaga)])
}