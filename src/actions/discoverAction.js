import movies from '../services/movieServices'


export const loadDiscover = () => async (dispatch) => {

    dispatch({
        type:"Loading"
    })

    const {data} = await movies.getDiscover()

    dispatch({
        type:"Fetch_Discover",
        payload:{
            discover:data.results
        }
    })
}

export const loadMoreDiscover = (page) => async (dispatch) => {
    const {data} = await movies.getMoreDiscover(page)

    dispatch({
        type:"Fetch_More_Discover",
        payload:{
            discovermore:data.results
        }
    })
}