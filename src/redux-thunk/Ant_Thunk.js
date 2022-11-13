import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { useSelector,useDispatch } from 'react-redux';
import { handleFetchNews, nextPage, setLoading } from './newSlice';
import Search from 'antd/lib/input/Search';
import Card from 'antd/lib/card/Card';
import {Skeleton,Button} from "antd"
const Ant_Thunk = () => {
     const {results,loading,query}=useSelector((state)=>state.movie)
     const dispatch=useDispatch()

     useEffect(()=>{
    
            dispatch(handleFetchNews(query))
        
     },[dispatch,query])
  /*    const handleLoading=(()=>{
        dispatch(setLoading(true))
     }) */
     const handleNextPage=(()=>{
        dispatch(nextPage())
     })
    return (
        <div>  
     <Button type='primary' style={{"float":"right"}} onClick={handleNextPage}>Next Page</Button>
        <Skeleton loading={loading}>
     <div style={{"display":"flex","flexWrap":"wrap","gap":"30px","padding":"50px"}}>
        {results.length > 0 && results.map(item => (
            <Card title="Card Movie"   hoverable
    style={{
      width: 240,
    }} key={item.id} >
                {item.title}
                <img style={{"width":"100%"}} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
            </Card>
        ))}
     </div>
        </Skeleton>
        </div>
    );
};

export default Ant_Thunk;