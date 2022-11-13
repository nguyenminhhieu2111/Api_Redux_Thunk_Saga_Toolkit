import {createAsyncThunk,createSlice,createAction} from "@reduxjs/toolkit"
import requestGetMovie from "./request";


export const setLoading=createAction('setLoading')
export const nextPage=createAction('nextPage')
export const handleFetchNews=createAsyncThunk(
'movie/handleFetchNews',async (query,thunkAPI)=>{
const response=await requestGetMovie(query);
return response.data.results
})

const initialState={
    results:[],
    loading:true,
    errorMessage:"",
    query:1
}
const newsSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
        setLoading:(state,action)=>({
            ...state,
            loading:action.payload
        })
    },
    extraReducers:(builder)=>{
        builder
        .addCase(handleFetchNews.fulfilled,(state,action)=>{
           state.results=action.payload 
           state.loading = false
        })
        .addCase(handleFetchNews.pending,(state,action)=>{
            state.loading = true
    
        })
        .addCase(handleFetchNews.rejected,(state,action)=>{
            state.loading = false 
        })
        .addCase(setLoading,(state,action)=>{
           state.loading=action.payload
        })
        .addCase(nextPage,(state,action)=>{
            state.query +=1
        })
    }
})

export default newsSlice.reducer