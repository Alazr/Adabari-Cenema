import Details from '../services/tvDetail'



export const  loadTvDetail = (id) => async (dispatch) =>{
    dispatch({
        type:"LOADING"
    })
    const {data} = await Details.getTvDetail(id)
    const {data:imageData} = await Details.getTvDetailImages(id)
    const {data:similarMovies} = await Details.getSimilarTV(id)
   
    dispatch({
        type:"LOAD_TV_DETAIL",
        payload:{
            details:data,
            images:imageData,
            similar:similarMovies.results
        }
    })
}