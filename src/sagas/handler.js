import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import {call,put} from "redux-saga/effects"
import { setLoading, setNews } from "./Newreducer";
import requestGetNews from "./request";
export default function* handleGetUser({payload,type}){
    try {
        yield put(setLoading(true))
        const response=yield call(requestGetNews,payload)
        const {hits}=response.data
        yield put(setNews(hits))
        yield put(setLoading(false))
    } catch (error) {
        console.log(error);
    }
}