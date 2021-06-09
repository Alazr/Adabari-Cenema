import config from './config.json'
import http from './httpServices'

const movieBaseUrl = `${config.apiEndPoint}/movie`

const getPopular = () =>{
    return http.get(`${movieBaseUrl}/popular?api_key=${process.env.REACT_APP_API}&page=1`)
}

const getLatest = async () =>{
    return http.get(`${movieBaseUrl}/now_playing?api_key=${process.env.REACT_APP_API}&page=1`)
}

const getUpcoming = () =>{
    return http.get(`${movieBaseUrl}/upcoming?api_key=${process.env.REACT_APP_API}&page=1`)
}

const getDiscover = () =>{
    return http.get(`${config.apiEndPoint}/discover/movie?api_key=${process.env.REACT_APP_API}`)
}

const getMoreDiscover = (page) =>{
    return http.get(`${config.apiEndPoint}/discover/movie?api_key=${process.env.REACT_APP_API}&page=${page}`)
}

const getByGenres = (genre) =>{
    return http.get(`${config.apiEndPoint}/discover/movie?api_key=${process.env.REACT_APP_API}&with_genres=${genre}`)
}

const getSearchedMovies = (val) =>{
    return http.get(`${config.apiEndPoint}/search/multi?query=${val}&api_key=${process.env.REACT_APP_API}&page=1`)
}



export default {
    getPopular,
    getLatest,
    getUpcoming,
    getDiscover,
    getByGenres,
    getMoreDiscover,
    getSearchedMovies
}