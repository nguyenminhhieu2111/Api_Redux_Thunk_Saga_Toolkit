import {takeLatest} from "redux-saga/effects"
import handleGetUser from "./handler"
import { getNews } from "./Newreducer"
export default function* newSaga(){
    yield takeLatest(getNews.type,handleGetUser)
} 