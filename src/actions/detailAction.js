import Details from '../services/movieDetailsServices'



export const  loadDetail = (id) => async (dispatch) =>{
    dispatch({
        type:"LOADING"
    })
    const {data} = await Details.getMovieDetail(id)
    const {data:imageData} = await Details.getDetailImages(id)
    const {data:similarMovies} = await Details.getSimilar(id)
    const {data:videoData} = await Details.getDetailVideos(id)
   
    dispatch({
        type:"LOAD_DETAIL",
        payload:{
            details:data,
            images:imageData,
            similar:similarMovies.results,
            videos:videoData.results
        }
    })
}