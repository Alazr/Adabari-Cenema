import movies from '../services/movieServices'
import tv from '../services/tvServices'
export const loadMovies = () => async (dispatch) =>{

    dispatch({
        type:"LOADING"
    })

    const {data:popularData} = await movies.getPopular();
    const {data:upcomingData} = await movies.getUpcoming()
    const {data:popularTvData} = await tv.getPopularTv()    
    const {data:onAirTvData} = await tv.getOnAirTv()    


    dispatch({
        type:"FETCH_MOVIES",
        payload:{
            popular:popularData.results,
            upcoming:upcomingData.results,
            popularTv:popularTvData.results,
            onAirTv:onAirTvData.results
        }
    })
}


export const searchedMovies = (val) => async (dispatch) =>{

    
    dispatch({
        type:"LOADING"
    })

    


    const {data} = await movies.getSearchedMovies(val)
    dispatch({
        type:"SEARCH_MOVIES",
        payload:{
            searched:data.results
        }
    })
}