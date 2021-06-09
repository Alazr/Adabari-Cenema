import movies from '../services/movieServices'



export const loadGenres = () => async (dispatch) =>{
    dispatch({
        type:"Loading"
    })
    const {data:romanticData} = await movies.getByGenres(10749)
    const {data:comedyData} = await movies.getByGenres(35)
    const {data:actionData} = await movies.getByGenres(28)

    dispatch({
        type:"Fetch_Genres",
        payload:{
            romantic:romanticData.results,
            comedy:comedyData.results,
            action:actionData.results
        }
    })
}

export const loadByGenres = (obj) => async (dispatch) =>{
    dispatch({
        type:"Loading"
    })
    const {data} = await movies.getByGenres(obj[0])

    dispatch({
        type:"Fetch_By_Genre",
        payload:{
            selectedGenre:data.results,
            selectedName:obj[1]
        }
    })
}
