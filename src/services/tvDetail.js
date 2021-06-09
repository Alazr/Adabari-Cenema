import config from './config.json'
import http from './httpServices'

const tvBaseUrl = `${config.apiEndPoint}/tv`


const getTvDetail = (id) =>{
    return http.get(`${tvBaseUrl}/${id}?api_key=${process.env.REACT_APP_API}`)
}

const getTvDetailImages =  (id) =>{
    return http.get(`${tvBaseUrl}/${id}/images?api_key=${process.env.REACT_APP_API}`)
}
const getSimilarTV =  (id) =>{
    return http.get(`${tvBaseUrl}/${id}/similar?api_key=${process.env.REACT_APP_API}`)
}


export default {
    getSimilarTV,
    getTvDetail,
    getTvDetailImages
}