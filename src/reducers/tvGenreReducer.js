import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons"

const initialState = {
    crimeTv:[],
    comedyTv:[],
    actionTv:[],
    selectedTvGenre:[],
    selectedTvName:"",
    isLoading:true
}


const tvGenresReducer = (state=initialState,action) =>{
    switch (action.type) {
        case "Fetch_Tv_Genres":
            return {...state,
                crimeTv:action.payload.crimeTv,
                comedyTv:action.payload.comedyTv,
                actionTv:action.payload.actionTv,
                isLoading:false}
        case "Loading":
            return {...state, 
                isLoading:true
            }
        case "Fetch_Tv_By_Genre":
            return {
                ...state,
                selectedTvGenre:action.payload.selectedTvGenre,
                selectedTvName:action.payload.selectedTvName,
                isLoading:false
            }
        default:
            return state
    }
}

export default tvGenresReducer;