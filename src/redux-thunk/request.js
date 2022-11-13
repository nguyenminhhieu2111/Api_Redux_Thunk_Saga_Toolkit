import axios from "axios"
export default function requestGetMovie(query='1'){
    return axios.request({
        method:"GET",
        url:`https://api.themoviedb.org/3/movie/popular?api_key=23879be03691509dfc61e31842e87a81&page=${query}`,
        params:{
            query
        }
    })
}