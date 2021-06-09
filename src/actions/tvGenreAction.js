import tv from '../services/tvServices'



export const loadTvGenres = () => async (dispatch) =>{
    dispatch({
        type:"Loading"
    })
    const {data:crime} = await tv.getByGenres(80)
    const {data:comedyData} = await tv.getByGenres(35)
    const {data:actionData} = await tv.getByGenres(10759)

    dispatch({
        type:"Fetch_Tv_Genres",
        payload:{
            crimeTv:crime.results,
            comedyTv:comedyData.results,
            actionTv:actionData.results
        }
    })
}

export const loadTvByGenres = (obj) => async (dispatch) =>{
    dispatch({
        type:"Loading"
    })
    const {data} = await tv.getByGenres(obj[0])

    dispatch({
        type:"Fetch_Tv_By_Genre",
        payload:{
            selectedTvGenre:data.results,
            selectedTvName:obj[1]
        }
    })
}
