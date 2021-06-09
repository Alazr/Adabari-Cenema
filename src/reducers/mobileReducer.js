const initialState = {
    isMobile:false
}

const mobileReducer = (state=initialState,action) =>{
    switch (action.type) {
        case "Mobile":
            return {
                isMobile:action.payload.value
            }
    
        default:
            return state
    }
}

export default mobileReducer;