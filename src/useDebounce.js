import { useEffect, useState } from "react";

export default function useDounce(initialState='',delay=1000){
   const [debouce,setDebouce]=useState(initialState)
   useEffect(()=>{
    const timer=setTimeout(()=>{
             setDebouce(initialState)
    },1000)
    return()=>{
        clearTimeout(timer)
    }
   },[delay,initialState])
   return debouce
}