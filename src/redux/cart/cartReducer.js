const { ADD_TO_CART } = require("./cartTypes");

const initialState = {
    noOfItems: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                noOfItems: state.noOfItems + action.payload
            }

        default:
            return state
    }
}

export default cartReducer;