import config from './config.json'
import http from './httpServices'

const tvBaseUrl = `${config.apiEndPoint}/tv`


const getPopularTv = () =>{
    return http.get(`${tvBaseUrl}/popular?api_key=${process.env.REACT_APP_API}`)
}

const getOnAirTv = () =>{
    return http.get(`${tvBaseUrl}/on_the_air?api_key=${process.env.REACT_APP_API}`)
}

const getByGenres = (genre) =>{
    return http.get(`${config.apiEndPoint}/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=${genre}`)
}

export default {
    getPopularTv,
    getOnAirTv,
    getByGenres
}