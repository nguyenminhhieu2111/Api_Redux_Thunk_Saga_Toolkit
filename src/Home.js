import React from 'react';
import useSWR from 'swr';
const Home = ({type="now_playing"}) => {

    const {data,error}=useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=23879be03691509dfc61e31842e87a81`,fetch)
    if(!data) return null
    if(error) alert('error')
   console.log(data)
   const movies=data?.results || [];
    return (
       (movies.length > 0 && movies.map(item =>(
        <div key={item.id}>
        <h1>{item.vote_average}</h1>
        </div>
       )))
    );
};

export default Home;