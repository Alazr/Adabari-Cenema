import config from '../services/config.json'

export const getImage = (path,size) =>{
    if(size === "o"){
        return `${config.originalImageUrl}${path}`
    }else
        return `${config.normalImageUrl}${path}`
}

