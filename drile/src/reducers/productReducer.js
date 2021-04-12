import { SET_LOADING } from "../actions/types";

const initialState = {
    selected: false,
    loading: false,
    total: 0,
    amount: 0,
    cart: null,
}

export default(state=initialState, action) => {
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state, 
                loading: true,
            }
        default:
            return state;
    }
}