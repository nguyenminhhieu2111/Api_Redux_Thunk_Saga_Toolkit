import { combineReducers } from "@reduxjs/toolkit";
import newSlice from "./newSlice";

export const reducer=combineReducers({
    movie:newSlice
})