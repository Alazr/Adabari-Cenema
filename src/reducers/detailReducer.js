const initialState = {
    details:{},
    images:{},
    similar:[],
    videos:[],
    isLoading:true
}

const movieDetail = (state=initialState,action) =>{
    switch(action.type){
        case "LOAD_DETAIL":
            return {...state,
            details:action.payload.details,
            images:action.payload.images,
            similar:action.payload.similar,
            videos:action.payload.videos,
            isLoading:false
            }
        case "LOADING":
            return {...state,isLoading:true}
        case "LOAD_TV_DETAIL":
            return{
                ...state,
                details:action.payload.details,
                images:action.payload.images,
                similar:action.payload.similar,
                isLoading:false
            }
        default:
            return state
    }
}


export default movieDetail;