import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {reducer} from "./reducer"
import createSagaMiddleware from "redux-saga"
import rootsaga from "./rootsaga";

const sagaMiddleware=createSagaMiddleware()
const store=configureStore({
    reducer:reducer,
    middleware:(gDM) => gDM().concat(logger,sagaMiddleware)
})
sagaMiddleware.run(rootsaga)
export default store