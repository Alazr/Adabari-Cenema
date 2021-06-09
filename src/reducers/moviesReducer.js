const initialState = {
    popular:[],
    upcoming:[],
    searched:[],
    popularTv:[],
    tvOnAir:[],
    isLoading:true
}

const moviesReducer = (state=initialState,action) =>{
    switch (action.type) {
        case "FETCH_MOVIES":
            return {...state,
                popular:action.payload.popular,
                upcoming:action.payload.upcoming,
                popularTv:action.payload.popularTv,
                tvOnAir:action.payload.onAirTv,
                isLoading:false
            }
        case "LOADING":
            return {
                ...state,isLoading:true
            }
        case "SEARCH_MOVIES":
            return {
                ...state,
                searched:action.payload.searched,
                isLoading:false
            }
        default:
            return state
    }
}

export default moviesReducer