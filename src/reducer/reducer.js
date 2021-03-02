
const initialState = {
    name: "Ishrat",
    wish: ["youtube", "play", "coding"]
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case "CHANGE_NAME":
            return {
                ...state,
                name: action.payload
            }
        case "ADD_WISH":
            return {
                ...state,
                wish: action.payload
            }
        default:
            return state
    }
}

export default reducer;