const initialState = {
    products: [],
    users: []
}

function rootReducer(state = initialState, action) {
    switch (action.type){
        case "ACTION_TEST":{
            return{
                ...state,
                test: action.payload
            }
        }
        default:{
            return state
        }
    }
}

export default rootReducer