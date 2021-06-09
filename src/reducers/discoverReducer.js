const initialState = {
    discover:[],
    isLoading:true,
    pageNum:2
}

const discoverReducer = (state = initialState,action) => {
    switch (action.type) {
        case "Fetch_Discover":
            return {...state,
            discover:action.payload.discover,
            isLoading:false
            }
        case "Fetch_More_Discover":
            return {
                ...state,
                discover:[...state.discover,...action.payload.discovermore],
                pageNum:state.pageNum + 1,
                isLoading:false
            }
        case "Loading":
            return {...state,isLoading:true}
        default:
            return state
    }
}


export default discoverReducer;