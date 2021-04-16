export const initialState = {
    cart: [],
    selected: null,
}


function reducer(state, action) {
    console.log(action);

    switch (action.typ) {
        case "SELECT_CARD":
            return {
                ...state,
                selected: action.item
            }

        case "ADD_TO_CART":
            return {
                ...state, 
                cart: [...state.cart, action.item]
            }
        case "REMOVE_FROM_CART":
            let newCart = [ ...state.cart]
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);

            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                alert("Can't remove product");
            }

            return {
                ...state,
                cart: newCart
            }
        default:
            return state;
    }
}

export default reducer;