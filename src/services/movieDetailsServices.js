import config from './config.json'
import http from './httpServices'

const movieBaseUrl = `${config.apiEndPoint}/movie`


const getMovieDetail = (id) =>{
    return http.get(`${movieBaseUrl}/${id}?api_key=${process.env.REACT_APP_API}`)
}

const getDetailImages =  (id) =>{
    return http.get(`${movieBaseUrl}/${id}/images?api_key=${process.env.REACT_APP_API}`)
}
const getSimilar =  (id) =>{
    return http.get(`${movieBaseUrl}/${id}/similar?api_key=${process.env.REACT_APP_API}`)
}
const getDetailVideos =  (id) =>{
    return http.get(`${movieBaseUrl}/${id}/videos?api_key=${process.env.REACT_APP_API}`)
}


export default {
    getMovieDetail,
    getDetailImages,
    getSimilar,
    getDetailVideos
}

