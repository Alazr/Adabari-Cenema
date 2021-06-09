import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons"

const initialState = {
    romantic:[],
    comedy:[],
    action:[],
    selectedGenre:[],
    selectedName:"",
    isLoading:true
}


const genresReducer = (state=initialState,action) =>{
    switch (action.type) {
        case "Fetch_Genres":
            return {...state,
                romantic:action.payload.romantic,
                comedy:action.payload.comedy,
                action:action.payload.action,
                isLoading:false}
        case "Loading":
            return {...state, 
                isLoading:true
            }
        case "Fetch_By_Genre":
            return {
                ...state,
                selectedGenre:action.payload.selectedGenre,
                selectedName:action.payload.selectedName,
                isLoading:false
            }
        default:
            return state
    }
}

export default genresReducer;