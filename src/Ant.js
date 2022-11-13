import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getNews, setQuery } from './sagas/Newreducer';
import { Card, Dropdown,Skeleton,Input } from 'antd';
import 'antd/dist/antd.css';
import useDounce from './useDebounce';
import { debounce } from 'lodash';
const Ant = () => {
    const dispatch=useDispatch()
   
    
      const {hits,errorMessage,query,loading}=useSelector((state)=> state.news)
    const {Search}=Input
    
  useEffect(()=>{
    setTimeout(()=>{
        dispatch(getNews(query))
    },1000)
   
  },[dispatch,query])
 
  const handleChangeQuery=debounce((e)=>{
   dispatch(setQuery(e.target.value))
  },250)
    return (
        <>
          <Search
          style={{width:500,marginLeft:500,marginTop:50}}
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onChange={handleChangeQuery}
    />
        <Skeleton loading={loading}>
     <div style={{"display":"flex","flexWrap":"wrap","gap":"30px","padding":"50px"}}>
        {hits.length > 0 && hits.map(item => (
            <Card title="Card title"   hoverable
    style={{
      width: 240,
    }} key={item.id} >
                {item.title}
            </Card>
        ))}
     </div>
        </Skeleton>
        </>
    );
};

export default Ant;